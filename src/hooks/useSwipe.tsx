import { computed, onMounted, onUnmounted, ref, Ref } from "vue";

type Point = {x:number,y:number}

interface Options {
    beforeStart?:(e:TouchEvent) => void
    afterStart?:(e:TouchEvent) => void

    beforeMove?:(e:TouchEvent) => void

    afterMove?:(e:TouchEvent) => void

    beforeEnd?:(e:TouchEvent) => void

    afterEnd?:(e:TouchEvent) => void

}
export const useSwipe = (element: Ref<HTMLElement|undefined> ,options:Options) => {
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
        options?.beforeStart?.(e)
        start.value = {
            x:e.touches[0].clientX,
            y:e.touches[0].clientY,
        }
        end.value = undefined
        swiping.value = true
        options?.afterStart?.(e)

    }
    const onMove = (e:TouchEvent)=>{
        options?.beforeMove?.(e)

        end.value = {
            x:e.touches[0].clientX,
            y:e.touches[0].clientY,
        }
        options?.afterMove?.(e)

    }
    const onEnd = (e:TouchEvent)=>{
        options?.beforeEnd?.(e)

        swiping.value = false
        options?.afterEnd?.(e)

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