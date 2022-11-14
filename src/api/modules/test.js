import { request } from '@/utils/request'

export const login = (data) => {
  return request({
    url: '/vue3-h5-template/user/login',
    method: 'POST',
    data
  })
}

export const getUserInfo = (params) => {
  return request({
    url: '/vue3-h5-template/user/info',
    method: 'GET',
    params
  })
}

export const logout = () => {
  return request({
    url: '/vue3-h5-template/user/logout',
    method: 'POST'
  })
}
