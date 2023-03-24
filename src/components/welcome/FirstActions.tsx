import {  FunctionalComponent, ref } from "vue";
import { RouterLink } from "vue-router";

import s from "./welcome.module.scss";


export const FirstActions :FunctionalComponent = (props,context)=>{
    return <div class={s.actions}>
            <RouterLink class={s.fake} to="/start">跳过</RouterLink>
          <RouterLink to="/welcome/2">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
    </div>
}

FirstActions.displayName = "First"
