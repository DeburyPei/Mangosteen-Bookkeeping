import { defineComponent,PropType,ref } from "vue";
import { Charts } from "../components/statisticsPage/Charts";
import { TimeTabsLayout } from "../layouts/TimeTabsLayout";
import s from "./StatisticsPage.module.scss";
export const StatisticsPage = defineComponent({
    props:{
       name:{
            type: String as PropType<string>,
       }
    },
    setup:(props,context)=>{
    return () => (
         <TimeTabsLayout rerenderOnSwitchTab={true} component={Charts}/>
      )
    }
})
// import { defineComponent } from 'vue';
// import { Charts } from "../components/statisticsPage/Charts";
// import { TimeTabsLayout } from '../layouts/TimeTabsLayout';
// export const StatisticsPage = defineComponent({
//   setup: (props, context) => {
//     return () => (
//       <TimeTabsLayout rerenderOnSwitchTab={true} component={Charts}
//         hideThisYear={true}
//       />
//     )
//   }
// })