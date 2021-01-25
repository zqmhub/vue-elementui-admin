import axios from 'axios'
import router from '@/router/routers'
import { Notification, MessageBox } from 'element-ui'
import store from '../store'
import { getToken, getTokenId } from '@/utils/auth'
import { getServerToken } from '@/api/login'
import Config from '@/settings'
import qs from 'qs'

const basis = '/basis'
const check = '/api/check/'
const point = '/api/maintain/'

let isGetToken = false

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/', // api 的 base_url
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: Config.timeout // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    checkHandleTime().then(() => {
      if (getToken()) {
        config.headers = {
          // 每个请求携带自定义token
          "Authorization": getToken(),
          // tokenId: getTokenId(),


          ...config.headers
        }
        // config.headers['token'] = getToken()
        // config.headers['tokenId'] = getTokenId()
      } else {
        config.headers = {
          ...config.headers
        }
      }
      if (config.method === 'post') {
        config.headers['Content-Type'] = config.headers['Content-Type'] ? config.headers['Content-Type'] : 'application/x-www-form-urlencoded'
        if (config.headers['Content-Type'] == 'application/x-www-form-urlencoded') {
          config.transformRequest = (data) => {
            return qs.stringify(data)
          }
        }
      } else if (config.method === 'get') {
        config.params = {
          t: Date.parse(new Date()) / 1000,
          ...config.params
        }
      } else if (config.method === 'put') {
        if (Object.prototype.toString.call(config.data) == '[object Array]') {
          // 是数组，直接传入 :TODO 暂时不知道会不会产生什么问题
        }
        else {
          config.data = {
            t: Date.parse(new Date()) / 1000,
            ...config.data
          }
        }
      }
    })
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.data.code
    if (code === 0 || code === 200) {
      return response.data // 请求成功回调
    } else if (code === 50004) {
      MessageBox.confirm(
        '登录状态已过期，您可以继续留在该页面，或者重新登录',
        '系统提示',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      }).catch(() => { })
    } else {
      Notification.error({
        title: response.data.msg,
        duration: 2000
      })
      return Promise.reject('error')
    }
  },
  error => {
    // --------------------2 错误处理，视后台而定
    let code = 0
    console.log('in the error!!')

    if (error.toString().indexOf('401') !== -1) {
      Notification.error({
        title: '登录失效请重新登录',
        duration: 5000
      })
      store.dispatch('LogOut').then(() => {
        window.location.href = process.env.VUE_APP_SSO;
      })
    }

    try {
      code = error.response.data.code
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        Notification.error({
          title: '网络请求超时',
          duration: 5000
        })
        return Promise.reject(error)
      }
    }
    if (code) {
      if (code === 403) {
        router.push({ path: '/401' })
      } else {
        const errorMsg = error.response.data.msg
        if (errorMsg !== undefined) {
          Notification.error({
            title: errorMsg,
            duration: 2000
          })
        }
      }
    } else {
      Notification.error({
        title: '接口请求失败',
        duration: 3000
      })
    }
    return Promise.reject(error)
  }
)

export function checkHandleTime() {
  return new Promise((resolve, reject) => {
    const timeNow = parseInt(new Date().getTime() / 1000)
    const handleTimeout = store.getters.handleTimeout
    const tokenTimeout = store.getters.tokenTimeout
    // 无tokentimout为登录界面
    if (!tokenTimeout) {
      setNewHandleTimeout(timeNow, handleTimeout)
      resolve()
    } else {
      if (timeNow >= handleTimeout + 14400) {
        // 操作超时，4小时
        store.dispatch('LogOut').then(() => { })
      } else if (tokenTimeout !== null && tokenTimeout - 7200 < timeNow && timeNow < handleTimeout + 14400) {
        if (isGetToken) {
          // token获取的单独通道
          resolve()
        } else {
          // 重新获取token
          getNewToken()
          setNewHandleTimeout(timeNow, handleTimeout)
          resolve()
        }
      } else {
        // 正常操作时间
        setNewHandleTimeout(timeNow, handleTimeout)
        resolve()
      }
    }
  })
}

export function setNewHandleTimeout(timeNow, handleTimeout) {
  if (!handleTimeout) {
    store.dispatch('setHandleTimeout', timeNow)
  }
  if (timeNow > handleTimeout + 60) {
    // 一分钟更新一次
    store.dispatch('setHandleTimeout', timeNow)
  }
}

export function getNewToken() {
  isGetToken = true
  getServerToken({ userId: getTokenId() }).then(res => {
    if (res.data) {
      isGetToken = false
      store.dispatch('setNewtoken', res.data)
    }
  })
}

export { service as request, basis, check, point }
