import { defineComponent, PropType, ref } from "vue";

import { NavBar } from "../shared/NavBar";

export const MainLayout = defineComponent({
  setup: (props, context) => {
    const { slots } = context;
    return () => (
      <div>
        <NavBar>
          {{
            title: () => slots.title?.(),
            icon: () => slots.icon?.(),
          }}
        </NavBar>
        {slots.default?.()}
      </div>
    );
  },
});
