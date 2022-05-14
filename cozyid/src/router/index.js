import Vue from "vue";
import VuerRouter from "vue-router";
import Beranda from "@/views/HomePage";
import DetailPage from "@/views/DetailPage";
import Default from "@/layouts/default.vue";

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(VuerRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component :Default,
    children : [
      {
        path:"",
        name:"Beranda",
        component: Beranda,
      },
      {
        path:"/DetailPage/:id",
        name:"DetailPage",
        component: DetailPage,
      }
    ]
  },
];
const router = new VuerRouter({
    mode:"history",
    base: "/",
    routes,
  });

export default router;