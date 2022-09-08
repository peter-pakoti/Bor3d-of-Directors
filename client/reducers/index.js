import { combineReducers } from 'redux'

import tasks from './tasks'
import activity from './activity'

export default combineReducers({
  activity,
  tasks,
})
