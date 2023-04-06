import { defineComponent,PropType,reactive,ref } from "vue";
import { Button } from "../../shared/Button";
import { EmojiSelect } from "../../shared/EmojiSelect";
import { Rules, validate } from "../../shared/vaildate";
import s from "./Tag.module.scss";
export const TagForm = defineComponent({
    props:{
       name:{
            type: String as PropType<string>,
       }
    },
    setup:(props,context)=>{
        const formData = reactive({
            name: "",
            sign: "😀",
          });
      
          const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({});
      
          const onSubmit = (e: Event) => {
            const rules: Rules<typeof formData> = [
              { key: "name", type: "required", message: "必填" },
              {
                key: "name",
                type: "pattern",
                regex: /^.{1,4}$/,
                message: "只能填 1 到 4 个字符",
              },
              { key: "sign", type: "required", message: "必填" },
            ];
            Object.assign(errors, {
              name: undefined,
              sign: undefined,
            });
            Object.assign(errors, validate(formData, rules));
           
            e.preventDefault();
          };
    return () => (
        <form class={s.form} onSubmit={onSubmit}>
        <div class={s.formRow}>
          <label class={s.formLabel}>
            <span class={s.formItem_name}>标签名</span>
            <div class={s.formItem_value}>
              <input v-model={formData.name} type="text" class={[s.formItem, s.input, s.error]} />
            </div>
            <div class={s.formItem_errorHint}>
              <span>{errors["name"] ? errors["name"][0] : "　"}</span>
            </div>
          </label>
        </div>
        <div class={s.formRow}>
          <label class={s.formLabel}>
            <span class={s.formItem_name}> 符号 {formData.sign}</span>
            <div class={s.formItem_value}>
              <EmojiSelect
                v-model={formData.sign}
                class={[s.formItem, s.emojiList, s.error]}
              />
            </div>
            <div class={s.formItem_errorHint}>
              <span>{errors["sign"] ? errors["sign"][0] : "　"}</span>
            </div>
          </label>
        </div>
        <p class={s.tips}>记账时长按标签即可进行编辑</p>
        <div class={s.formRow}>
          <div class={s.formItem_value}>
            <Button class={[s.formItem, s.button]} onClick={() => {}}>
              确定
            </Button>
          </div>
        </div>
      </form>
      )
    }
})