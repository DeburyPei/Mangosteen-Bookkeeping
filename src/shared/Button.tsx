import { computed, defineComponent,PropType,ref } from "vue";
import s from "./Button.module.scss";

// StartPage 直接收onClick事件 不会报错
// interface Props{
//     onClick: (e: MouseEvent) => void,
    
// }
export const Button = defineComponent({
    // inheritAttrs:true,
    props: {
        onClick: {
          type: Function as PropType<(e: MouseEvent) => void>
        },
        level: {
          type: String as PropType<'important' | 'normal' | 'danger'>,
          default: 'important'
        },
        type:{
          type:String as PropType<'submit' | 'button'>,
          default:'button'
        },
        disabled:{
          type:Boolean,
          default:false
        },
        autoSelfDisabled:{
          type:Boolean,
          default:false
        }

      },
    setup:(props,context)=>{
    
      //自我沉默 方法 延迟
    const selfDisabled = ref(false)   // 自我沉默
    const _disabled = computed(()=>{
      if(props.autoSelfDisabled === false){
        return props.disabled
      }
      if(selfDisabled.value){
        return true
      }else{
        return props.disabled
      }
    })
    const onClick = ()=>{    // 第一种加延迟
      props.onClick?.()
      selfDisabled.value = true
      setTimeout(()=>{   // 半秒钟不可点击
        selfDisabled.value = false
      },500)
    }
    
    // 默认插槽
    // console.log(context.slots.default?.())
    return () => (
         <button disabled={_disabled.value} type={props.type} class={[s.button,s[props.level]]} onClick={ onClick}>
            {context.slots.default?.()} 
         </button>
       )
    }
})