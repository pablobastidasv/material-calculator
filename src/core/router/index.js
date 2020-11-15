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
    path: '/drywall_calculator',
    name: 'DrywallCalculator',
    component: Main
  }
]

const router = new VueRouter({
  routes
})

export default router
