import { setStorage, getStorage, removeStorage } from '@/utils/storage'
import { logout } from '@/api/modules/test'

const getDefaultState = () => {
  return {
    token: getStorage('token'),
    userInfo: JSON.parse(getStorage('userInfo'))
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
      setStorage('token', token)
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
      setStorage('userInfo', userInfo)
    }
  },
  actions: {
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          removeStorage('token')
          commit('resetState')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
