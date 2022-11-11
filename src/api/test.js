import { request } from '@/utils/request'

export const getUserInfo = (params) => {
  return request({
    url: '/vue3-h5-template/user/info',
    method: 'GET',
    params
  })
}
