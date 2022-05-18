import Vue from "vue";
import VuerRouter from "vue-router";
import Beranda from "@/views/HomePage";
import DetailPage from "@/views/DetailPage";
import AllKos from "@/views/AllKosPage";
import Default from "@/layouts/default.vue";
import Kontak from "@/views/KontakPage";
import Discount from "@/views/DiscountPage";
import About from "@/views/AboutPage";
import Login from "@/views/LoginPage";


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
      },
      {
        path:"/AboutPage",
        name:"AboutPage",
        component: About,
      },
      {
        path:"/KontakPage",
        name:"KontakPage",
        component: Kontak,
      },
      {
        path:"/DiscountPage",
        name:"DiscountPage",
        component: Discount,
      },
      {
        path:"/AllKosPage",
        name:"AllKosPage",
        component: AllKos,
      }
    ]
    
  },
  {
    path:"/LoginPage",
    name:"LoginPage",
    component: Login,
  },
];
const router = new VuerRouter({
    mode:"history",
    base: "/",
    routes,
  });

export default router;