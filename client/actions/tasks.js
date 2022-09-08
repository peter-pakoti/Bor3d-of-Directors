import { getTasks } from '../apis/tasks'
import { getRandomTask } from '../helpers'

export const REQUEST_TASKS = 'REQUEST_TASKS'
export const RECEIVE_TASKS = 'RECEIVE_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const DEL_TASK = 'DEL_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

export function requestTasks() {
  return {
    type: 'REQUEST_TASKS',
  }
}
export function receiveTasks(tasks) {
  return {
    type: 'RECEIVE_TASKS',
    payload: tasks,
  }
}
export function addNewTask(task) {
  return {
    type: 'ADD_TASK',
    payload: task,
  }
}

export function deleteOldTask(task) {
  return {
    type: 'DEL_TASK',
    payload: task,
  }
}

export function updateOldTask(newTask) {
  return {
    type: 'UPDATE_TASK',
    payload: {
      newTask,
    },
  }
}

export function fetchTasks() {
  return (dispatch) => {
    dispatch(requestTasks())
    return getTasks().then((tasks) => {
      console.log(tasks)
      dispatch(receiveTasks(tasks))
      return null
    })
  }
}
