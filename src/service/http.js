import Taro from '@tarojs/taro'
import configStore from '@/store'
import { BaseUrl } from './config'
import { logError } from '../utils/error'
import { getToken, removeToken } from '../utils/auth'

const state = configStore().getState()

export default {
  baseOptions(params, method = 'GET') {
    const token = state.user.token && getToken()
    const { url, data } = params
    const contentType = params.contentType || 'application/json'
    const option = {
      url: BaseUrl + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType,
        'token': token
      },
      // mode: 'cors',
      xhrFields: { withCredentials: true },
      success(res) {
        console.log(res)
        if (res.statusCode === 404) {
          return logError('api', '请求资源不存在')
        } else if (res.statusCode === 502) {
          return logError('api', '服务端出现了问题')
        } else if (res.statusCode === 403) {
          return logError('api', '没有权限访问')
        } else if (res.statusCode === 301) {
          removeToken()
          Taro.navigateTo({
            url: '/pages/login/index'
          })
          return logError('api', '请先登录')
        } else if (res.statusCode === 200) {
          return res.data
        }
      },
      error(e) {
        logError('api', '请求接口出现问题', e)
      }
    }
    return Taro.request(option)
  },
  get(url, data) {
    const option = { url, data }
    return this.baseOptions(option)
  },
  post: function(url, data, contentType) {
    const params = { url, data, contentType }
    return this.baseOptions(params, 'POST')
  },
  put(url, data) {
    const option = { url, data }
    return this.baseOptions(option, 'PUT')
  },
  delete(url, data) {
    const option = { url, data }
    return this.baseOptions(option, 'DELETE')
  }
}
