
import { defineComponent,PropType,ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { BackIcon } from "../../shared/BackIcon";
import { Button } from "../../shared/Button";
import { Icon } from "../../shared/Icon";
import s from "./Tag.module.scss";
import { TagForm } from "./TagForm";
import {  useRoute } from "vue-router";

export const TagEdit = defineComponent({
    props:{
       name:{
            type: String as PropType<string>,
       }
    },
    setup:(props,context)=>{
      const route = useRoute()
      const numberId = parseInt(route.params.id!.toString()) 
      if(Number.isNaN(numberId)){
        return ()=><div>id 不存在</div>
      }
    return () => (
      <MainLayout>
      {{
        title: () => "编辑标签",
        icon: () => <BackIcon />,
        default: () => <>
          <TagForm id={numberId}/>
          <div class={s.actions}>
            <Button level='danger' class={s.removeTags} onClick={() => { }}>删除标签</Button>
            <Button level='danger' class={s.removeTagsAndItems} onClick={() => { }}>删除标签和记账</Button>
          </div>
        
         </>,
      }}
    </MainLayout>
      )
    }
})