import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    children: [
      {
        path: "news",
        name: "News",
        component: () =>
          import(/* webpackChunkName: "news" */ "../views/News.vue")
      },
      {
        path: "message",
        name: "Message",
        component: () =>
          import(/* webpackChunkName: "message" */ "../views/Message.vue"),
        children: [
          {
            path: "detail/:id",
            component: () =>
              import(
                /* webpackChunkName: "detail" */ "../views/messageDetail.vue"
              )
          }
        ]
      },
      {
        path: "",
        redirect: "news"
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/",
    redirect: "/about"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
