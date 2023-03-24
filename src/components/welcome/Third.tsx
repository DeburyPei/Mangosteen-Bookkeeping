import { defineComponent, ref } from "vue";
import {RouterLink} from "vue-router"
import chart from "../../assets/svg/chart.svg"
import s from "./First.module.scss"
export const Third = defineComponent({
  setup(props, context) {
    return () => (
      
        <div class={s.wrapper}>
          <div class={s.card}>
            <img src={chart} alt="" />
            <h2>数据可视化 <br /> 收支一目了然</h2>
          </div>
          <div class={s.actions}>
          <RouterLink class={s.fake} to="/start">跳过</RouterLink>
            <RouterLink to="/welcome/4">下一页</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
          </div>
        </div>
      
    );
  },
});
