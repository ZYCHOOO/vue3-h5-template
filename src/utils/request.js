import axios from 'axios'
import store from '@/store'
import { Notify } from 'vant'
import httpEnums from '@/utils/httpEnums'
import { getToken } from '@/utils/storage'
import { getEnvValue } from '@/utils/environment'

// create an axios instance
const request = axios.create({
  baseURL: getEnvValue('VUE_APP_BASE_API'),
  timeout: 10000
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
    async response => {
      const res = response.data

      // blob文件流
      if (res instanceof Blob) {
        return res
      }

      // 成功
      if (res.code === httpEnums.CODES.Success) {
        return res
      }

      // token失效
      if (res.code === httpEnums.CODES.UnAuthorized) {
        return Promise.reject(new Error('token过期！'))
      }

      const errMsg = res.message || res.msg

      Notify({
        message: errMsg || 'Error',
        type: 'danger',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(errMsg || 'Error'))
    },
    async error => {
      console.log('err' + error) // for debug

      // 定时器提示报错的防抖
      const errorDebounceHandler = (errorMessage) => {
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

      const errorData = error.response.data
      const errorStatus = error.response.status

      if (errorStatus === httpEnums.HTTP_STATUS.REQUEST_ERROR.UnAuthorized) {
        errorDebounceHandler(error.message)
      } else if (errorData.code === httpEnums.HTTP_STATUS.SERVER_ERROR.InternalServerError) {
        // 500特殊处理
        return Promise.reject(error)
      } else {
        errorDebounceHandler(error.message)
        return Promise.reject(error)
      }
    }
  )
})

export { request }
