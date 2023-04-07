import { defineComponent,PropType,ref } from "vue";
// import s from "./ItemSummary.module.scss";
export const ItemSummary = defineComponent({
    props:{
       name:{
            type: String as PropType<string>,
       }
    },
    setup:(props,context)=>{
    return () => (
         <div>ItemSummary</div>
      )
    }
})