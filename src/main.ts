import { createApp } from "vue";
import { App } from "./App";
import { createRouter } from "vue-router";
import { history } from "./shared/history";
import { routes } from "./config/routes";
import '@svgstore';
const router = createRouter({
  history,
  routes, // `routes: routes` 的缩写
});
const app = createApp(App);
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router);

app.mount("#app");
