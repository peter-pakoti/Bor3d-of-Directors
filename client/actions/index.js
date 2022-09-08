import { getActivity } from '../apis/activity'

export const SET_ACTIVITY = 'SET_ACTIVITY'
export const FETCH_ACTIVITY_FAILED = 'FETCH_ACTIVITY_FAILED'

export function setActivity(activity) {
  return {
    type: SET_ACTIVITY,
    payload: activity,
  }
}

export function fetchActivityFailed(message) {
  return {
    type: FETCH_ACTIVITY_FAILED,
    payload: message,
  }
}

export function fetchActivity() {
  return (dispatch) => {
    return getActivity()
      .then((activity) => {
        dispatch(setActivity(activity))
      })
      .catch((e) => {
        dispatch(fetchActivityFailed(e.message || 'Server Error'))
      })
  }
}
