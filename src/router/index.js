import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'Home',
  redirect: '/home/index',
  component: () => import('@/views/home/Home'),
  children: [{
    path: 'index',
    name: 'Index',
    component: () => import('@/views/home/Index'),
    meta: { title: '首页' }
  }, {
    path: 'custom',
    name: 'Custom',
    component: () => import('@/views/home/Custom'),
    meta: { title: '自定义' }
  }, {
    path: 'mine',
    name: 'Mine',
    component: () => import('@/views/home/Mine'),
    meta: { title: '我的' }
  }]
}, {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/Login'),
  meta: { title: '登录' }
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
