import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// need to import a fetchActivity function
import { fetchActivity } from '../actions'

function ShowActivity() {
  const activity = useSelector((state) => state.activity)
  const dispatch = useDispatch()

  return (
    <div>
      <button className="button" onClick={() => dispatch(fetchActivity())}>
        Give Me Something To Do!
      </button>
      {activity && (
        <div>
          <p>{activity.activity}</p>{' '}
          <p>The type of this activity is {activity.type} based</p>
        </div>
      )}
    </div>
  )
}

export default ShowActivity
