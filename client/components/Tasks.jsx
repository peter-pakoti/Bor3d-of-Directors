import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTasks } from '../actions/tasks'

function Tasks() {
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        <button onClick={() => dispatch(fetchTasks())}>Tasks</button>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks
