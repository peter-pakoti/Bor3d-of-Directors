import request from 'superagent'

import { getTasks } from '../apis/tasks'

export const REQUEST_TASKS = 'REQUEST_TASKS'
export const RECEIVE_TASKS = 'RECEIVE_TASKS'
export const ADD_TASK = 'ADD_WOMBAT'
export const DEL_TASK = 'DEL_WOMBAT'
export const UPDATE_TASK = 'UPDATE_WOMBAT'

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

export function updateOldTask(oldTask, newTask) {
  return {
    type: 'UPDATE_TASK',
    payload: {
      oldTask,
      newTask,
    },
  }
}

export function fetchTasks() {
  return (dispatch) => {
    dispatch(requestTasks())
    return request.get(getTasks()).then((tasks) => {
      console.log(tasks)
      dispatch(receiveTasks(tasks))
      return null
    })
  }
}
