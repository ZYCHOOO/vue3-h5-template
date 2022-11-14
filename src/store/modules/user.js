import { setToken, getToken, removeToken } from '@/utils/storage'
import { logout } from '@/api/modules/test'

const getDefaultState = () => {
  return {
    token: getToken()
  }
}

export default {
  namespaced: true,
  state: getDefaultState(),
  mutations: {
    resetState (state) {
      Object.assign(state, getDefaultState())
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          removeToken()
          commit('resetState')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
