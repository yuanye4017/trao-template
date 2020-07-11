import Taro from '@tarojs/taro'
import { TokenKey } from '@/service/config'

export function getToken() {
  return Taro.getStorageSync(TokenKey)
}

export function setToken(token) {
  return Taro.setStorageSync(TokenKey, token)
}

export function removeToken() {
  return Taro.removeStorageSync(TokenKey)
}
