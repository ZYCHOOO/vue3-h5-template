import { setToken, getToken } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    token: getToken()
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {}
}
