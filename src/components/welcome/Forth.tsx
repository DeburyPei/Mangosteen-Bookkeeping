import { defineComponent, ref } from "vue";
import {RouterLink} from "vue-router"
import cloud from "../../assets/svg/cloud.svg"
import s from "./WelcomeLayout.module.scss"
import { WelcomeLayout } from "./WelcomeLayout";

export const Forth = defineComponent({
  setup(props, context) {
    const slots = {
      icon: ()=><img src={cloud} alt="" />,
      title: ()=>  <h2>云备份 <br /> 再也不怕数据丢失</h2>,
      buttons: ()=><>
             <RouterLink class={s.fake} to="/start">跳过</RouterLink>
              <RouterLink to="/start">完成</RouterLink>
              <RouterLink class={s.fake} to="/start">跳过</RouterLink>
      </>
    }
    return ()=>(
      <WelcomeLayout v-slots={slots}></WelcomeLayout> 
    )
  },
});