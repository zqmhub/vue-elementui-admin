import { request, basis } from '@/utils/request'

export function getUserInfo(params) {
  return request({
    url: basis + '/security/va/user/find',
    method: 'get',
    
  })
}

export function getdesktopMenu(userId) {
  return request({
    url: '/basis/security/va/user/user-authority',
    method: 'get',
    })
}