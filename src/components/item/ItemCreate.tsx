import { defineComponent, PropType, reactive } from "vue";
import { useRouter } from "vue-router";
import { MainLayout } from "../../layouts/MainLayout";
import { http } from "../../shared/Http";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { InputPad } from "./InputPad";
import s from "./ItemCreate.module.scss";
import { Tags } from "./Tags";
import { AxiosError } from "axios";
import { Dialog } from "vant";
import { BackIcon } from "../../shared/BackIcon";

export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const formData = reactive({
      kind:'支出',
      tags_id:[],
      amount:0,
      happen_at : new Date().toISOString()
    })
    // const refKind = ref("支出");
    // const refTagId = ref<number>()   
    // const refHappenAt = ref<string>(new Date().toString())
    // const refAmount = ref<number>(0)
    const router = useRouter()
    const onError = (error: AxiosError<ResourceError>)=>{
      if(error.response?.status === 422){
        Dialog.alert({
          title:'出错',
          message:Object.values(error.response.data.errors).join('\n')
        })
      }
      throw error
    }
    const onSubmit =async () => {
        await http.post<Resources<Item>>('/items',formData,{
          params:{_mock:'itemCreate'}
        }).catch(onError)  // 先通过mock 会拿到mock中的假数据
        router.push("/item")
    }
    return () => (
      <MainLayout class={s.layout}>
        {{
          title: () => "记一笔",
          icon: () =><BackIcon class={s.navIcon}/> ,
          default: () => (
            <>
            <div class={s.wrapper}>
              {/* <Tabs  selected={refKind.value} onUpdateSelected={onUpdateSelected}> */}
              <Tabs v-model:selected={formData.kind} class={s.tabs} onUpdate:selected={()=>{}}>
                <Tab name="支出" >
                <Tags kind="expenses" v-model:selected={formData.tags_id[0]}/>
                </Tab>
                <Tab name="收入" >
                <Tags kind="income" v-model:selected={formData.tags_id[0]}/>               
                </Tab>
              </Tabs>
              <div class={s.inputPad_wrapper}>
                <InputPad 
                  v-model:happenAt={formData.happen_at}
                  v-model:amount={formData.amount}
                  onSubmit={onSubmit}
                />
              </div>
              </div>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
