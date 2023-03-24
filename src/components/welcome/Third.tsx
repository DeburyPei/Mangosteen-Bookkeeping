import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import chart from "../../assets/svg/chart.svg";
import s from "./WelcomeLayout.module.scss";
import { WelcomeLayout } from "./WelcomeLayout";

export const Third = defineComponent({
  setup(props, context) {
    const slots = {
      icon: () => <img src={chart} alt="" />,
      title: () => (
        <h2>
          数据可视化 <br /> 收支一目了然
        </h2>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/welcome/4">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </>
      ),
    };
    return () => <WelcomeLayout v-slots={slots}></WelcomeLayout>;
  },
});
