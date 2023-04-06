import { defineComponent, PropType, ref } from "vue";
import s from "./MainLayout.module.scss";
import { NavBar } from "../shared/NavBar";

export const MainLayout = defineComponent({
  setup: (props, context) => {
    const { slots } = context;
    return () => (
     
      <div class={s.wrapper}>
        <NavBar class={s.navbar}>{   
          {
            title: () => slots.title?.(),
            icon: () => slots.icon?.(),
          }}</NavBar>
        {slots.default?.()}
      </div>
    );
  },
});
