import { defineComponent,PropType,reactive,ref, toRaw } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Button } from "../../shared/Button";
import { EmojiSelect } from "../../shared/EmojiSelect";
import { Icon } from "../../shared/Icon";
import s from "./TagCreate.module.scss";

export const TagCreate = defineComponent({
    props:{
       name:{
            type: String as PropType<string>,
       }
    },
    setup:(props,context)=>{
    const formData = reactive({
        name:'',
        sign:'\u{1F600}'
    })
    console.log(toRaw(formData))
    const rules = [
        {key:'name',required:true,message:'必填'},
        {key:'name',pattern:/^.{1,4}$/,message:'只能填 1 到 4 个字符'},
        {key:'sign',required:true,message:'必填'},
    ]
    const errors = validate(formData,rules)
    // errors = {
    //     name:['错误1','错误2'],
    //     sign:['错误3','错误4']
    // }
    return () => (
         <MainLayout>{{
            title:() => '新建标签',
            icon:()=> <Icon name="left" onClick={()=>{}}></Icon>,
            default:()=>(
                    <form class={s.form}>
                        <div class={s.formRow}>
                            <label class={s.formLabel}>
                                    <span class={s.formItem_name}>标签名</span>
                                    <div class={s.formItem_value}>
                                        <input type="text" placeholder="2到4个汉字" class={[s.formItem, s.input, s.error]}/>
                                    </div>
                                    <div class={s.formItem_errorHint}>
                                <span>{errors[name]?.[0]}</span>
                            </div>
                            </label>
                        </div>
                        <div class={s.formRow}>
                            <label class={s.formLabel}>
                                <span class={s.formItem_name}> 符号 {formData.sign}</span>
                                    <div class={s.formItem_value}> 
                                        <EmojiSelect v-model={formData.sign} class={[s.formItem, s.emojiList, s.error]} />
                                    </div>
                                    <div class={s.formItem_errorHint}>
                                        <span>{errors[sign]?.[0]}</span>
                                    </div>
                                
                            </label>
                        </div>
                        <p class={s.tips}>记账时长按标签即可进行编辑</p>
                        <div class={s.formRow}>
                            <div class={s.formItem_value}>
                                <Button class={[s.formItem,s.button]} onClick={()=>{}}>确定</Button>
                            </div>
                        </div>
                    </form>
            )

     
            
        }}</MainLayout>
        
      )
    }
})