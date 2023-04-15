import { defineComponent, PropType, reactive, ref, toRaw } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { BackIcon } from "../../shared/BackIcon";
import { Button } from "../../shared/Button";
import { EmojiSelect } from "../../shared/EmojiSelect";
import { Icon } from "../../shared/Icon";
import { validate, Rules } from "../../shared/vaildate";
import s from "./TagCreate.module.scss";
import { TagForm } from "./TagForm";

export const TagCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
   

    return () => (
      <MainLayout>
        {{
          title: () => "新建标签",
          icon: () => <BackIcon />,
          default: () => (
            <TagForm />
          ),
        }}
      </MainLayout>
    );
  },
});
