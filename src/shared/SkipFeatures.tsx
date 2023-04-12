import { defineComponent,PropType,ref } from "vue";
import { RouterLink } from "vue-router";

export const SkipFeature = defineComponent({
    
    setup:(props,context)=>{
    const onClick = () =>{
        localStorage.setItem('skipFeatures','yes')
    }
    return () => (
         <span onClick={onClick} >
            <RouterLink to="/start">跳过</RouterLink>
         </span>
      )
    }
})