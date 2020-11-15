import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from "@/features/drywall_calculation/presentation/views/Main";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/drywall_calculator'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/drywall_calculator',
    name: 'DrywallCalculator',
    component: Main
  }
]

const router = new VueRouter({
  routes
})

export default router
