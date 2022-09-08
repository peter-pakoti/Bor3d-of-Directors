import { SET_ACTIVITY } from '../actions'

const initialState = null

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_ACTIVITY:
      return payload
    default:
      return state
  }
}

export default reducer
