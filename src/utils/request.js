import axios from 'axios'
import store from '@/store'
import { Notify } from 'vant'
import { getToken } from '@/utils/storage'
import { getEnvValue } from '@/utils/environment'

// create an axios instance
const request = axios.create({
  baseURL: getEnvValue('VUE_APP_BASE_API'),
  timeout: 1000
})

const requestArr = [request]

// 一段时间内的提示显示的防抖，防抖时间设置为5秒
let errMsgDebounceTimer = null
const errMsgDebounceWait = 5000

requestArr.forEach(service => {
  // request interceptor
  service.interceptors.request.use(
    async config => {
      if (store.getters.token) {
        config.headers.Authorization = `Bearer ${getToken()}`
      }
      return config
    },
    error => {
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )

  // response interceptor
  service.interceptors.response.use(
    async response => {},
    async error => {
      console.log('err' + error) // for debug

      // 定时器提示报错的防抖
      // eslint-disable-next-line no-unused-vars
      const debounceErrMsgHandler = (errorMessage) => {
        if (errMsgDebounceTimer) clearTimeout(errMsgDebounceTimer)
        const callNow = !errMsgDebounceTimer
        errMsgDebounceTimer = setTimeout(() => {
          errMsgDebounceTimer = null
        }, errMsgDebounceWait)

        if (callNow) {
          Notify({
            message: errorMessage,
            type: 'danger',
            duration: errMsgDebounceWait
          })
        }
      }
    }
  )
})

export { request }
