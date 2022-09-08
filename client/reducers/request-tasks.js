import { REQUEST_TASKS, RECEIVE_TASKS } from '../actions/tasks'

function request(state = false, action) {
  const { type } = action

  switch (type) {
    case REQUEST_TASKS:
      return true
    case RECEIVE_TASKS:
      return false
    default:
      return state
  }
}

export default request
