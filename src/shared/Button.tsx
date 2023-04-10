import { defineComponent,PropType,ref } from "vue";
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
        }

      },
    setup:(props,context)=>{
    
    
    // 默认插槽
    // console.log(context.slots.default?.())
    return () => (
         <button disabled={props.disabled} type={props.type} class={[s.button,s[props.level]]} onClick={props.onClick}>
            {context.slots.default?.()} 
         </button>
       )
    }
})