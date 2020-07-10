import { LOGIN, LOGIN_OUT } from '../constants/user'

export const login = payLoad => {
  return dispatch => {
    dispatch({
      type: LOGIN,
      payLoad: payLoad
    })
  }
}
export const loginOut = () => {
  return dispatch => {
    dispatch({
      type: LOGIN_OUT
    })
  }
}
