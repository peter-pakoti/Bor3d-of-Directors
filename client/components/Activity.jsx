import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// need to import a fetchActivity function
import { fetchActivity } from '../actions'

function ShowActivity() {
  const activity = useSelector((state) => state.activity)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(fetchActivity())}>Click Me</button>
      {activity && <p>{activity.activity}</p>}
    </div>
  )
}

export default ShowActivity
