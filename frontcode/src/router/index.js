import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/myLayout.vue'
import Login from '@/views/login/myLogin.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})
export default router
