import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/myLayout.vue'
import Login from '@/views/login/myLogin.vue'
import Home from '@/views/layout/content/home/contentHome.vue'
import Recommend from '@/views/layout/content/recommend/contentRecommend.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { 
        path:'/',
        name:'home',
        component: Home,
      },{
        path:'/recommend',
        name:'recommend',
        component: Recommend
      }
    ]
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
