import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchTasks,
  addNewTask,
  deleteOldTask,
  updateOldTask,
} from '../actions/tasks'

function Tasks() {
  const tasks = useSelector((state) => state.tasks)
  const [newTask, setNewTask] = useState('')
  console.log(tasks)
  const dispatch = useDispatch()

  function onSubmit(e) {
    e.preventDefault()
    const newId = () =>
      Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36)
    const action = addNewTask({ id: newId(), text: newTask })
    dispatch(action)
  }

  function handleChange(e) {
    setNewTask(e.target.value)
  }

  return (
    <div>
      <h1 className="tasks">How can I complete this?</h1>
      <ul>
        <button className="button" onClick={() => dispatch(fetchTasks())}>
          Here's how!
        </button>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => dispatch(deleteOldTask(task.id))}>
              Completed
            </button>
            <input
              onChange={(evt) => {
                const text = evt.target.value
                dispatch(updateOldTask({ text, id: task.id }))
              }}
              value={newTask.text}
            />
          </li>
        ))}
      </ul>

      <form onSubmit={onSubmit}>
        <h3>Add a new task</h3>
        <input onChange={handleChange} value={newTask} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Tasks
