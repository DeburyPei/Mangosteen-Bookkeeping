import { defineComponent, PropType, reactive, ref } from "vue";
import { Button } from "../../shared/Button";
import { Form, FormItem } from "../../shared/Form";

import { Rules, validate } from "../../shared/vaildate";
import s from "./Tag.module.scss";
export const TagForm = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
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
      <Form onSubmit={onSubmit}>
        <FormItem
          type="text"
          v-model={formData.name}
          label="标签名"
          error={errors["name"]?.[0]}
        />
        <FormItem
          type="emojiSelect"
          v-model={formData.sign}
          label={"符号 " + formData.sign}
          error={errors["sign"]?.[0]}
        />
        <FormItem>
          <p class={s.tips}>记账时长按标签即可进行编辑</p>
        </FormItem>
        <FormItem>
          <Button class={[s.button]}>确定</Button>
        </FormItem>
      </Form>
    );
  },
});
