import { defineComponent, ref } from "vue";
import {RouterLink} from "vue-router"
import clock from "../../assets/svg/clock.svg"
import s from "./WelcomeLayout.module.scss"
import { WelcomeLayout } from "./WelcomeLayout";

export const Second = defineComponent({
  setup(props, context) {
    const slots = {
      icon: ()=><img src={clock} alt="" />,
      title: ()=> <h2>每日提醒 <br /> 不会遗漏每一笔账单</h2>,
      buttons: ()=><>
            <RouterLink class={s.fake} to="/start">跳过</RouterLink>
            <RouterLink to="/welcome/3">下一页</RouterLink>
            <RouterLink to="/start">跳过</RouterLink></>

    }
    return ()=>(
      <WelcomeLayout v-slots={slots}></WelcomeLayout> 
    )
  },
});
