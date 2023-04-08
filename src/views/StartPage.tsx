import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import { MainLayout } from "../layouts/MainLayout";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import { NavBar } from "../shared/NavBar";
import { Overlay, OverlayIcon } from "../shared/Overlay";
import s from "./StartPage.module.scss";
export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log("hi");
    };
   
    return () => (
      <MainLayout>
        {{
          title: () => "山竹记账",
          icon: () => (
            <OverlayIcon />
          ),
          default: () => (
            <>
              <Center class={s.pig_wrapper}>
                <Icon name="pig" class={s.pig}></Icon>
              </Center>
              <div class={s.button_wrapper}>
                <RouterLink to="/item/create">
                  <Button class={s.button} onClick={onClick}>
                    开始记账
                  </Button>
                </RouterLink>
              </div>
              <RouterLink to="/item/create">
                <FloatButton iconName="add" />
              </RouterLink>
              
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
