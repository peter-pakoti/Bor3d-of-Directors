// import { get } from '../apis/fruits'

// export const SET_FRUITS = 'SET_FRUITS'

// export function setFruits(fruits) {
//   return {
//     type: SET_FRUITS,
//     payload: fruits,
//   }
// }

// export function fetchFruits() {
//   return (dispatch) => {
//     return getFruits().then((fruits) => {
//       dispatch(setFruits(fruits))
//     })
//   }
// }

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
