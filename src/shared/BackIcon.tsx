import { defineComponent,PropType,ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Icon } from "./Icon";
// import s from "./BackIcon.module.scss";
export const BackIcon = defineComponent({
    setup:(props,context)=>{
    const router = useRouter()
    const route = useRoute()
    const onClick = () =>{
        const {return_to} = route.query //如果url 存在 return_to数据
        if(return_to){
            router.push(return_to.toString())
        }else{
            router.back()
        }
    }
    return () => (
         <Icon name="left" onClick={onClick}></Icon>
      )
    }
})