import { DatetimePicker, Popup } from "vant";
import { computed, defineComponent, PropType, ref } from "vue";
import { Button } from "./Button";
import { EmojiSelect } from "./EmojiSelect";
import s from "./Form.module.scss";
import { Time } from "./time";
export const Form = defineComponent({
  props: {
    onSubmit: {
      type: Function as PropType<(e: Event) => void>,
    },
  },
  emits: ['update:modelValue'],
  setup: (props, context) => {
    return () => (
      <form class={s.form} onSubmit={props.onSubmit}>
        {context.slots.default?.()}
      </form>
    );
  },
});
export const FormItem = defineComponent({
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: [String, Number],
    },
    type: {
      type: String as PropType<"text" | "emojiSelect" | "date" | "validationCode">,
    },
    error: {
      type: String,
    },
    placeholder:String
  },
  setup: (props, context) => {
    const refDateVisible = ref(false)
    const content = computed(() => {
        
      switch (props.type) {
        case "text":
          return (
            <input
              value={props.modelValue}
              type="text"
              onInput={(e: any) =>
                context.emit("update:modelValue", e.target.value)
              }
              placeholder={props.placeholder}
              class={[s.formItem, s.input]}
            />
          );
        case "emojiSelect":
          return (
            <EmojiSelect
              modelValue={props.modelValue?.toString()}
              onUpdateModelValue={value =>
                context.emit("update:modelValue", value)
              }
              class={[s.formItem, s.emojiList, s.error]}
            />
          );
        case "date":
          return <>
             <input readonly={true} value={props.modelValue}
              onClick={() => { refDateVisible.value = true }}
              placeholder={props.placeholder}
              class={[s.formItem, s.input]} />
            <Popup position='bottom' v-model:show={refDateVisible.value}>
              <DatetimePicker value={props.modelValue} type="date" title="选择年月日"
                onConfirm={(date: Date) => {
                  context.emit('update:modelValue', new Time(date).format())
                  refDateVisible.value = false
                }}
                onCancel={() => refDateVisible.value = false} />
            </Popup>
            </>
        case "validationCode":
            return <>
                    <input  placeholder={props.placeholder} 
                    class={[s.formItem, s.input, s.validationCodeInput]}
                    onInput={(e: any) =>
                        context.emit("update:modelValue", e.target.value)
                      }
                    />
                    <Button class={[s.formItem, s.button, s.validationCodeButton]}>发送验证码</Button>
                </>
        case undefined:
          return context.slots.default?.();
      }
    });
    return () => {
      return (
        <div class={s.formRow}>
          <label class={s.formLabel}>
            {/* 如果传入props.label 就显示后面的 */}
            {props.label && <span class={s.formItem_name}>{props.label}</span>}
            <div class={s.formItem_value}>{content.value}</div>
            <div class={s.formItem_errorHint}>
           
            <div class={s.formItem_errorHint}>
                <span>{props.error ?? '　'}</span>
            </div>
            
            </div>
          </label>
        </div>
      );
    };
  },
});