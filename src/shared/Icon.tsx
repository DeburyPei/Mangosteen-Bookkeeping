import { defineComponent,PropType,ref } from "vue";
import s from "./Icon.module.scss";

export type IconName = 'add' | 'chart' | 'clock' | 'cloud' |
  'mangosteen' | 'pig' | 'menu' | 'charts' | 'notify' | 'export' | 'left' | 'date'

 
export const Icon = defineComponent({
    props:{
        name:{
            type : String as PropType<IconName>,
            required:true
        },
        onClick:{
            type:Function as PropType<(e:MouseEvent) => void>
        }
    },
    setup:(props,context)=>{
    

    // console.log('icon',props.onCxxxlick)
    return () => (
         <svg class={s.icon} onClick={props.onClick}>
            <use xlinkHref={'#'+props.name}></use>
         </svg>
      )
    }
})