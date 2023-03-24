import {  FunctionalComponent } from "vue";
import { RouterLink } from "vue-router";
import pig from "../../assets/svg/pig.svg";
import s from "./welcome.module.scss";

export const First :FunctionalComponent = (props,context)=>{
    return  <div class={s.card}>
              <img src={pig} alt="" />
              <h2>会挣钱 <br /> 还会省钱</h2>
            </div> 
}

First.displayName = "First"

