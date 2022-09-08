//
import tasks from './data/tasks'

//Random num generator
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//getRandom Task
export function getRandomTask() {
  // Get 3 random tasks from data
  let arrLength = tasks['tasks'].length
  let task1 = getRandomNumber(0, arrLength - 1)
  let task2 = getRandomNumber(0, arrLength - 1)
  let task3 = getRandomNumber(0, arrLength - 1)
  let task4 = getRandomNumber(0, arrLength - 1)
  return [
    tasks['tasks'][task1],
    tasks['tasks'][task2],
    tasks['tasks'][task3],
    tasks['tasks'][task4],
  ]
}
