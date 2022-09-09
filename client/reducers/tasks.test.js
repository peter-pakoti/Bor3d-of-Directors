import reducer from './tasks'
import { addNewTask, receiveTasks, deleteOldTask } from '../actions/tasks'

describe('tasks reducer', () => {
  // test('receives task', () => {
  //   const newState = receiveTasks(['white', 'yellow', 'blue'])
  //   expect(newState[1]).toBe('yellow')
  // })
  test('adds a new task', () => {
    const action = addNewTask('tired')
    const newState = reducer(['I', 'Am'], action)
    expect(newState[2]).toBe('tired')
  })
  test('deletes an old task', () => {
    const action = deleteOldTask({ id: 2, text: 'happy' })
    const newState = reducer(
      [
        { id: 0, text: 'I' },
        { id: 1, text: 'am' },
        { id: 2, text: 'happy' },
      ],
      action
    )
  })
})
