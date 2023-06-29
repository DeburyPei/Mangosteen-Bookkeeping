import { defineComponent, onMounted, PropType, ref } from "vue";
import s from "./Overlay.module.scss";
import { Icon } from "./Icon";
import { RouterLink, useRoute } from "vue-router";
import { mePromise } from "./me";
import { Dialog } from "vant";
import { useMeStore } from "../stores/useMeStore";
export const Overlay = defineComponent({
  props: {
    onClose: {
      type: Function as PropType<() => void>,
    },
  },
  setup: (props, context) => {
    const meStore = useMeStore()
    const close = () => {
      //传入 的 onClose是个函数 需要 执行
      props.onClose?.();
    };
    const route = useRoute()
    const me = ref<User>()
    onMounted(async ()=>{
      const response = await meStore.mePromise
      me.value = response?.data.resource
    })
    const onClickSignIn = () => {};
    const onClickSignOut = async () => {
      await Dialog.confirm({
        title:"确认",
        message:"你真的要推出登录吗？"
      })
      localStorage.removeItem('jwt')
    };
    // console.log('overlay',props.onClose)
    return () => (
      <>
        <div class={s.mask} onClick={props.onClose}></div>
        <div class={s.overlay}>
          <section class={s.currentUser} onClick={onClickSignIn}>
            {me.value ? (
              <div>
                  <h2 class={s.email}>{me.value.email}</h2>
               
                 <p onClick={onClickSignOut}>点击这里退出登陆</p>
              
              </div>
              
            ):(
                <div>
                        <h2>未登录的用户</h2>
                <RouterLink to='/sign_in'>
                 <p>点击这里登陆</p>
                </RouterLink>
                </div>
            )}
           
            
          </section>
          <nav>
            <ul class={s.action_list}>
              <li>
                <RouterLink to="/statistics" class={s.action}>
                  <Icon name="charts" class={s.icon} />
                  <span>统计图表</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/export" class={s.action}>
                  <Icon name="export" class={s.icon} />
                  <span>导出数据</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/notify" class={s.action}>
                  <Icon name="notify" class={s.icon} />
                  <span>记账提醒</span>
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  },
});

export const OverlayIcon = defineComponent({
  setup: (props, context) => {
    const refOverlayVisible = ref(false)
    const onClickMenu = () => {
      refOverlayVisible.value = !refOverlayVisible.value
    }
    return () => <>
      <Icon name="menu" class={s.icon} onClick={onClickMenu} />
      {refOverlayVisible.value &&
        <Overlay onClose={() => refOverlayVisible.value = false} />
      }
    </>

  }
})