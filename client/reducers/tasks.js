// const initialState = ['It', 'Is', 'Working']
import {
  RECEIVE_TASKS,
  ADD_TASK,
  DEL_TASK,
  UPDATE_TASK,
} from '../actions/tasks'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_TASKS:
      return payload
    case ADD_TASK:
      return { ...state, payload }
    case DEL_TASK:
      return state.filter((task) => task !== payload)
    case UPDATE_TASK:
      return state.map((task) => {
        if (task === payload.oldTask) {
          return payload.newTask
        }
        return task
      })
    default:
      return state
  }
}

export default reducer
