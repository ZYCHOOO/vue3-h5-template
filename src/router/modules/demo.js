const routes = [{
  path: '/userInfo',
  name: 'UserInfo',
  component: () => import(/* webpackChunkName: 'user-info' */'@/views/demo'),
  meta: { title: '用户信息', showNavbar: true }
}]

export default routes
