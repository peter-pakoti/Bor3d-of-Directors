import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Task from './Task'

function Tasks() {
  const tasks = useSelector((state) => state.tasks)

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>
            <Task name={task} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks
