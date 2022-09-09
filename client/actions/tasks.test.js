import { fetchTasks, RECEIVE_TASKS } from '../actions/tasks'
import { getTasks } from '../apis/tasks'

jest.mock('../apis/tasks')
const mockTasks = [
  { id: 0, text: 'Hello' },
  { id: 0, text: 'Hello' },
  { id: 0, text: 'Hello' },
]

getTasks.mockReturnValue(Promise.resolve(mockTasks))

const fakeDispatch = jest.fn()
beforeEach(() => {
  jest.clearAllMocks()
})

describe('fetchTasks', () => {
  it('dispatches requestTasks at start of thunk', () => {
    return fetchTasks()(fakeDispatch).then(() => {
      const fakeDispatchFirstCallArgument = fakeDispatch.mock.calls[0][0]
      expect(fakeDispatchFirstCallArgument.type).toBe('REQUEST_TASKS')
      return null
    })
  })
  it('dispatches receive tasks after api call', () => {
    return fetchTasks()(fakeDispatch).then(() => {
      const fakeDispatchSecondAction = fakeDispatch.mock.calls[1][0]
      expect(fakeDispatchSecondAction.type).toBe('RECEIVE_TASKS')
      // expect(fakeDispatchSecondAction.tasks).toBe(mockTasks)
      return null
    })
  })
})
