import { FunctionalComponent, ref } from "vue";

import cloud from "../../assets/svg/cloud.svg"
import s from "./welcome.module.scss"


export const Forth :FunctionalComponent = (props,context)=>{
  return  <div class={s.card}>
            <img src={cloud} alt="" />
            <h2>云备份 <br /> 再也不怕数据丢失</h2>
          </div> 
}

Forth.displayName = "Forth"