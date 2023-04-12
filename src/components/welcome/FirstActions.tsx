import {  FunctionalComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import { SkipFeature } from "../../shared/SkipFeatures";

import s from "./welcome.module.scss";


export const FirstActions :FunctionalComponent = (props,context)=>{
    return <div class={s.actions}>
            <SkipFeature class={s.fake} />
          <RouterLink to="/welcome/2">下一页</RouterLink>
          <SkipFeature />
    </div>
}

FirstActions.displayName = "First"
