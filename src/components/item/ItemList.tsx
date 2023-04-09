import { defineComponent,reactive,ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Form, Overlay } from 'vant';
import { Icon } from "../../shared/Icon";
import { Tab,Tabs } from "../../shared/Tabs";
import { Time } from "../../shared/time";
import s from "./ItemList.module.scss";
import { ItemSummary } from "./ItemSummary";
import { FormItem } from "../../shared/Form";
import { OverlayIcon } from "../../shared/Overlay";
import { TimeTabsLayout } from "../../layouts/TimeTabsLayout";
export const ItemList = defineComponent({
    
    setup:(props,context)=>{

    return () => (
      <TimeTabsLayout component={ItemSummary}/>
      )
    }
})