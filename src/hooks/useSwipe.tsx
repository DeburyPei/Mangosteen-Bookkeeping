import { computed, onMounted, onUnmounted, ref, Ref } from "vue";

type Point = {x:number,y:number}

export const useSwipe = (element: Ref<HTMLElement|null> ) => {
    const start = ref<Point>()   // 起始坐标
    const end = ref<Point>()    // 结束坐标
    const swiping = ref(false)   // 是否在移动
    const distance = computed(()=>{   // 计算距离
        if(!start.value || !end.value){return undefined}
        return{
            x:end.value.x - start.value.x,
            y:end.value.y - start.value.y,

        }
    })
    const direction = computed(()=>{    // 判断方向 通过 垂直
        if(!distance.value){return ''}
        const {x,y} = distance.value
        if(Math.abs(x)>Math.abs(y)){  // 投影
            return x>0 ? 'right' : 'left'
        }else{
            return y > 0?'down':'up'
        }
    })
    const onStart = (e:TouchEvent)=>{
        start.value = {
            x:e.touches[0].clientX,
            y:e.touches[0].clientY,
        }
        end.value = undefined
        swiping.value = true
    }
    const onMove = (e:TouchEvent)=>{
        end.value = {
            x:e.touches[0].clientX,
            y:e.touches[0].clientY,
        }
    }
    const onEnd = (e:TouchEvent)=>{
        swiping.value = false
    }
    onMounted(()=>{  // 要挂载才会有反应  不然监听不到
        if(!element.value){return}

        element.value.addEventListener('touchstart',onStart)
        element.value.addEventListener('touchmove',onMove)
        element.value.addEventListener('touchend',onEnd)
    })
    onUnmounted(()=>{  // 元素被污染了 记得要取消
        if(!element.value){return}

        element.value.removeEventListener('touchstart',onStart)
        element.value.removeEventListener('touchmove',onMove)
        element.value.removeEventListener('touchend',onEnd)
    })
    return {
        swiping,distance,direction
    }
}