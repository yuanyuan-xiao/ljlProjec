import VueRouter from "vue-router";
import Vue from "vue";

import tjxm from "../views/admin/tjxm.vue";
import tjsc from "../views/admin/tjsc.vue";
import sctx from "../views/admin/sctx.vue";
import ckpm from "../views/admin/ckpm.vue";
import djcj from "../views/admin/djcj.vue";

import xygl from "../views/superdAmin/xygl.vue";
import zhgl from "../views/superdAmin/zhgl.vue";
import ckxm from "../views/student/ckxm.vue";
import ckcj from "../views/student/ckcj.vue";
import cksc from "../views/student/cksc.vue";
import Login from "../views/Login/login";
import xtsy from "../views/xtsy/xtsy";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "*",
      redirect: "/login",
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/xtsy",
      component: xtsy,
    },
    {
      path: "/tjxm",
      component: tjxm,
    },

    {
      path: "/tjsc",
      component: tjsc,
    },
    {
      path: "/sctx",
      component: sctx,
    },
    {
      path: "/ckpm",
      component: ckpm,
    },
    {
      path: "/djcj",
      component: djcj,
    },

    {
      path: "/xygl",
      component: xygl,
    },
    {
      path: "/zhgl",
      component: zhgl,
    },
    {
      path: "/ckxm",
      component: ckxm,
    },
    {
      path: "/ckcj",
      component: ckcj,
    },
    {
      path: "/cksc",
      component: cksc,
    },
  ],
});
