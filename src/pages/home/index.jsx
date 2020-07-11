import Taro from '@tarojs/taro'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { getDemo } from '@/api/home'
import { add, minus, asyncAdd } from '../../store/actions/counter'

const Home = () => {
  const counter = useSelector(state => state.counter)
  useEffect(() => {
    Taro.getSystemInfo({
      success: res => console.log(res)
    })
    getDemo().then(({ data }) => {
      console.log(11, data)
    })
  }, [])
  const dispatch = useDispatch()
  const _addCounter = () => {
    dispatch(add())
  }
  const _decCounter = () => {
    dispatch(minus())
  }
  const _asyncAdd = () => {
    dispatch(asyncAdd())
  }

  return (
    <View className='index'>
      <AtButton type='primary'>按钮文案</AtButton>
      <Button className='add_btn' onClick={_addCounter}>+</Button>
      <Button className='dec_btn' onClick={_decCounter}>-</Button>
      <Button className='dec_btn' onClick={_asyncAdd}>async</Button>
      <View><Text>{ counter.num }</Text></View>
      <View><Text>Hello, World</Text></View>
    </View>
  )
}

export default Home

