// eslint-disable-next-line no-unused-vars
import store from '@/store'
import router from '@/router'
import { getToken } from '@/utils/storage'

router.beforeEach((to, from, next) => {
  const { name } = to;
  (getToken() || name === 'Login') ? next() : next({ name: 'Login' })
})
