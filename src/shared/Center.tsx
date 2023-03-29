import { defineComponent,PropType,ref, useSlots } from "vue";
import s from "./Center.module.scss";
export const Center = defineComponent({
    props:{
       name:{
            type: String as PropType<string>,
       }
    },
    setup:(props,context)=>{
    return () => (
         <div class={s.center}>{
            context.slots.default?.()
            }</div>
      )
    }
})