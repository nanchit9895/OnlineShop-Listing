import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OpenMyShop from '../views/OpenMyShop.vue'
import ShopSearch from '../views/ShopSearch1.vue'

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
  {  
    path: '/shopsearch1',
    name: 'ShopSearch',
    component: ShopSearch
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
