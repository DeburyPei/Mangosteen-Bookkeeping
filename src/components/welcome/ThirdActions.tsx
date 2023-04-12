import {  FunctionalComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import { SkipFeature } from "../../shared/SkipFeatures";

import s from "./welcome.module.scss";


export const ThirdActions :FunctionalComponent = (props,context)=>{
    return <div class={s.actions}>
            <SkipFeature class={s.fake} />
          <RouterLink to="/welcome/4">下一页</RouterLink>
          <SkipFeature />

    </div>
}

ThirdActions.displayName = "Third"
