import { defineComponent, PropType, ref } from "vue";

import { ItemList } from "../components/item/ItemList";
import s from "./Tabs.module.scss";
export const Tabs = defineComponent({
  props: {
    classPrefix:{
      type:String
    },
    selected: {
      type: String as PropType<string>,
      required:false
    },
    // onUpdateSelected:{
    //     type: Function as PropType<(name:string)=>void>,
    //   required:false

    // }
  },
  setup: (props, context) => {
    return () => {
      const array = context.slots.default?.();
      if (!array) return () => null;
      array.forEach((value) => {
        if (value.type !== Tab) {
          throw new Error("<Tabs> only accept <Tab> as children");
        }
      });
      const cp = props.classPrefix
      return <div class={[s.tabs,cp+"_tabs"]}>
                  
                    <ol class={[s.tabs_nav,cp+"_tabs_nav"]}>
                        {array.map(item => <li class={[
                          item.props?.name === props.selected ? [s.selected,cp + "_selected"] : '',
                          cp + '_tabs_nav_item'
                        ]}
                            onClick={()=>context.emit('update:selected',item.props?.name)}
                        >
                            {item.props?.name}</li>)}
                    </ol>
                <div>
                    {array.find(item=>item.props?.name === props.selected)}
                </div>
        </div>
    };
  },
});
export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => <div>{context.slots.default?.()}</div>;
  },
});
