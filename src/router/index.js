import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopSearch from '../views/ShopSearch1.vue'

Vue.use(VueRouter)

  const routes = [
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
