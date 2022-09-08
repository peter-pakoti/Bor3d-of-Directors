import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchTasks } from '../actions/tasks'

function Task() {
  // console.log(props)
  // const task = props.name
  const dispatch = useDispatch()

  console.log(fetchTasks())
  return (
    <div>
      <div>{dispatch(fetchTasks())}</div>
    </div>
  )
}

export default Task
