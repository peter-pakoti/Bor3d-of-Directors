import { getRandomTask } from '../helpers'

export function getTasks() {
  return Promise.resolve(getRandomTask())
}
