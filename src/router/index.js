import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OpenMyShop from '../views/OpenMyShop.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/openmyshop',
    name: 'OpenMyShop',
    component: OpenMyShop
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
