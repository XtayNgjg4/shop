import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/tabbar/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta:{
      showTab:true
    }
  },
  {
    path: '/Find',
    name: 'Find',
    component: () => import('../views/tabbar/Find.vue'),
    meta:{
      showTab:true
    }
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import('../views/tabbar/Cart.vue'),
    meta:{
      showTab:true
    }
  },
  {
    path: '/Personal',
    name: 'Personal',
    component: () => import('../views/tabbar/Personal.vue'),
    meta:{
      showTab:true
    }
  },
  {
    path: '/Personal/setting',
    name:'setting',
    component: () => import('../views/personal/setting.vue'),
  },
  {
    path:'/shopDetail/shopDetail:shopid',
    name:'shopDetail',
    component:() => import('../views/shopDetail/shopDetail.vue'),
  },
  {
    path:'/user/login',
    name:'login',
    component:() => import('../views/user/login.vue'),
  }

]




const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
