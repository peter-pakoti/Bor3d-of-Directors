//
import { tasks } from './data/tasks'
//Random num generator
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//getRandom Task
export function getRandomTask() {
  // Get 3 random tasks from data
  let arrLength = tasks.length - 1
  const newId = () =>
    Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36)

  let task1 = getRandomNumber(0, arrLength)
  let task2 = getRandomNumber(0, arrLength)
  let task3 = getRandomNumber(0, arrLength)
  let task4 = getRandomNumber(0, arrLength)
  return [
    { id: newId(), text: tasks[task1] },
    { id: newId(), text: tasks[task2] },
    { id: newId(), text: tasks[task3] },
    { id: newId(), text: tasks[task4] },
  ]
}
