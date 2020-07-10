import initState from '../state/counter'
import { ADD, MINUS } from '../constants/counter'

export default function counter(state = initState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      }
    default:
      return state
  }
}
