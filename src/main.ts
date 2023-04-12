import { createApp } from "vue";
import { App } from "./App";
import { createRouter } from "vue-router";
import { history } from "./shared/history";
import { routes } from "./config/routes";
import '@svgstore';
import { fetchMe, mePromise } from "./shared/me";


const router = createRouter({
  history,
  routes, // `routes: routes` 的缩写
});
fetchMe()
//全局守卫 加 白名单
router.beforeEach(async(to,from)=>{
    if(to.path === '/'   // 如果是这些就不需要守卫 直接返回true
    || to.path.startsWith('/welcome') 
    || to.path.startsWith('/sign_in')
    || to.path === '/start'){
      return true
    }else{                  // 其他需要守卫 否则没有登录就跳转到/sign_in?return_to= 如果登录就跳转回 return_to等于的网站
      return mePromise!.then(
        ()=>true,
        ()=>'/sign_in?return_to='+to.path
      )
       
    }
})
const app = createApp(App);
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router);

app.mount("#app");
