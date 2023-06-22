import {  FunctionalComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import { SkipFeature } from "../../shared/SkipFeatures";

import s from "./welcome.module.scss";

const onClick = () =>{
    localStorage.setItem('skipFeatures','yes')
}

export const ForthActions :FunctionalComponent = (props,context)=>{
    
    return <div class={s.actions}>
             <SkipFeature class={s.fake} />
              <RouterLink to="/items">
                <span onClick={onClick}>
                    完成
                </span>
              </RouterLink>
              <SkipFeature class={s.fake} />

    </div>
}
ForthActions.displayName = "Forth"
