import { createStore } from 'vuex'
import userModule from './modules/user'
import getters from './getters'

export default createStore({
  modules: {
    userModule
  },
  getters
})
