import store from '@/store'
import { createRouter, createWebHashHistory } from 'vue-router'
import demoRoutes from './modules/demo'

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'Home',
  redirect: '/home/index',
  component: () => import(/* webChunkName: 'hoome' */ '@/views/home/Home'),
  children: [{
    path: 'index',
    name: 'Index',
    component: () => import(/* webpackChunkName: 'home-index' */ '@/views/home/Index'),
    meta: { title: '首页', showNavbar: false }
  }, {
    path: 'custom',
    name: 'Custom',
    component: () => import(/* webpackChunkName: 'home-custom' */ '@/views/home/Custom'),
    meta: { title: '自定义', showNavbar: false }
  }, {
    path: 'mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: 'home-mine' */ '@/views/home/Mine'),
    meta: { title: '我的', showNavbar: false }
  }]
}, {
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login'),
  meta: { title: '登录', showNavbar: false },
  beforeEnter: (to, from, next) => {
    const { token } = store.state.userModule
    token ? next('/') : next()
  }
},
...demoRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
