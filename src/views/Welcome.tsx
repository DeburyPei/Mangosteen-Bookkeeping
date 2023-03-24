import { defineComponent, Transition } from "vue";
import { RouterView } from "vue-router";
import s from "./Welcome.module.scss";
import logo from "../assets/svg/mangosteen.svg";
// console.log(logo) /src/assets/svg/logo.svg
export const Welcome = defineComponent({
  setup(props, context) {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} alt="" />
          <h1>山竹记账</h1>
        </header>
        <main class={s.main}>
          <RouterView name="main">
            {/* 这个RouterView的第二种写法 获取里面传入的组件 */}
            {(obj: any) => <Transition name="slide_fade"><obj.Component /></Transition> }
          </RouterView>
        </main>
        <footer>
          <RouterView name="footer" />
        </footer>
      </div>
    );
  },
});
