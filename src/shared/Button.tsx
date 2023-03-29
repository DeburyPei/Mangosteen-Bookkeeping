import { defineComponent,ref } from "vue";
import s from "./Button.module.scss";

// StartPage 直接收onClick事件 不会报错
interface Props{
    onClick: (e: MouseEvent) => void
}
export const Button = defineComponent<Props>({
    // inheritAttrs:true,

    setup:(props,context)=>{
    
    
    // 默认插槽
    // console.log(context.slots.default?.())
    return () => (
         <button class={s.button} >
            {context.slots.default?.()} 
         </button>
       )
    }
})