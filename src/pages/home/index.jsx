import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { add, minus, asyncAdd } from '../../store/actions/counter'

const Home = () => {
  const counter = useSelector(state => state.counter)
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
      <Button className='add_btn' onClick={_addCounter}>+</Button>
      <Button className='dec_btn' onClick={_decCounter}>-</Button>
      <Button className='dec_btn' onClick={_asyncAdd}>async</Button>
      <View><Text>{ counter.num }</Text></View>
      <View><Text>Hello, World</Text></View>
    </View>
  )
}

export default Home

