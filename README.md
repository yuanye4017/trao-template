# trao-template
使用taro 3.x 搭建的模版，封装API，plop模版，路由拦截，hooks
## 概述
+ 请求拦截，api全局封装
+ plop生成模版
+ redux的重新封装
+ app.js中拦截路由
+ react-hooks + redux
+ taro-ui按需加载

## 请求拦截，api全局封装
```js
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
```
```js
// 使用api
import http from '@/service/http'

export const login = () => {
  return http.post('/login')
}
```
## plop生成模版
```js
yarn new 
```

## redux的重新封装
```
|-- store
 |-- action
   |-- counter.js
 |-- constants
   |-- counter.js   
 |-- reducer
   |-- counter.js   
   |-- index.js
 |-- state
   |-- counter.js   
index.js
```
## `app.js`中拦截路由
> 思想是在`app.js`中判断时候有`token`，然后`Taro.reLaunch`跳转到登陆页面
```js
// app.js
componentDidMount() {
  if (!store.getState().user.token) {
    Taro.reLaunch({ url: `/pages/login/index` })
  }
}
```

## react-hooks + redux
> 在`taro 2.x`的时候使用redux好像有bug,就是在`h5`页面上不能使用`useSelector`。`3.0`以后修复了这个问题
```js
import { useSelector, useDispatch } from 'react-redux'
// 获取redux中的counter
const counter = useSelector(state => state.counter)

// 更改redux中的数据
 const dispatch = useDispatch()
 const _addCounter = () => {
   dispatch(add())
 }
```
## taro-ui按需加载
> 这里有个小问题，正常情况下我们会 `yarn add taro-ui`,可是我安装后发现是`trao 3.x`可能不支持，是会报错的。所以在`issues`中找到如下解决方案。

```js
yarn add taro-ui@3.0.0-alpha.2
```
