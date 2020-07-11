import { setToken } from '@/utils/auth'
import initState from '../state/user'
import { LOGIN, LOGIN_OUT } from '../constants/user'

export default function user(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      if (action.payLoad) {
        state.userName = action.payLoad.userName
        state.avatorUrl = action.payLoad.avatorUrl
        state.token = action.payLoad.token
        setToken(action.payLoad.token)
      }
      return {
        ...state
      }
    case LOGIN_OUT:
      state.userName = ''
      state.avatorUrl = ''
      state.token = ''
      return {
        ...state
      }
    default:
      return state
  }
}
