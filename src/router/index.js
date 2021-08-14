import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/tools/b64",
    name: "Base-64",
    component: () =>
      import(/* webpackChunkName: "b64" */ "../views/tools/b64.vue"),
  },
  {
    path: "/tools/twitch",
    name: "Twitch",
    component: () =>
      import(/* webpackChunkName: "twitch" */ "../views/tools/twitch.vue"),
  },
  {
    path: "/tools/youtube",
    name: "YouTube",
    component: () =>
      import(/* webpackChunkName: "youtube" */ "../views/tools/youtube.vue"),
  },
  {
    path: "/tools/qr",
    name: "QR",
    component: () =>
      import(/* webpackChunkName: "qr" */ "../views/tools/qr.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/auth/Login.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/auth/Logout.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
