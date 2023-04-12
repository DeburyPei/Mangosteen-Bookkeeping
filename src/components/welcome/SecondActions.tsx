import {  FunctionalComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import { SkipFeature } from "../../shared/SkipFeatures";

import s from "./welcome.module.scss";


export const SecondActions :FunctionalComponent = (props,context)=>{
    return <div class={s.actions}>
            <SkipFeature class={s.fake} />
          <RouterLink to="/welcome/3">下一页</RouterLink>
          <SkipFeature />

    </div>
}

SecondActions.displayName = "Second"
