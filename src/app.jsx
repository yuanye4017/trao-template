import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import 'taro-ui/dist/style/index.scss'
import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component {
  componentDidMount() {
    // if (!store.getState().user.token) {
    //   Taro.reLaunch({ url: `/pages/login/index` })
    // }
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
