import store from '@/store'
import router from '@/router'
import { ROUTE_WHITE_LIST } from '@/utils/enums'

router.beforeEach((to, from, next) => {
  const { name } = to
  const { token } = store.state.userModule
  const isInWhiteList = ROUTE_WHITE_LIST.includes(name);
  (token || isInWhiteList) ? next() : next({ name: 'Login' })
})
