import { getActivity } from '../apis/activity'

export const SET_ACTIVITY = 'SET_ACTIVITY'

export function setActivity(activity) {
  return {
    type: SET_ACTIVITY,
    payload: activity,
  }
}

export function fetchActivity() {
  return (dispatch) => {
    return getActivity.then((activity) => {
      dispatch(setActivity(activity))
    })
  }
}
