import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Main from "./components/Main.vue";
import Table from "./components/Table.vue";

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/main",
      component: Main
    },
    {
      path: "/table",
      component: Table
    }
  ]
});
