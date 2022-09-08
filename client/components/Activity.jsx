import React from 'react'
import { useDispatch } from 'react-redux'

// need to import a fetchActivity function

function ShowActivity() {
  const dispatch = useDispatch()

  return (
    <div>
      <button>Click Me</button>
    </div>
  )
}

export default ShowActivity
