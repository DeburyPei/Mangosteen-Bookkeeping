import { defineComponent,ref } from "vue";
import { RouterView } from "vue-router";

export const TagPage = defineComponent({
    setup:(props,context)=>{
    return () => (
         <div><RouterView /></div>
      )
    }
})