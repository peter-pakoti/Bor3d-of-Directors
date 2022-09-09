import { fetchActivity, SET_ACTIVITY, FETCH_ACTIVITY_FAILED } from './index'
import { getActivity } from '../apis/activity'

jest.mock('../apis/activity')

const fakeDispatch = jest.fn()
beforeEach(() => {
  jest.clearAllMocks()
})

describe('fetchActivity', () => {
  it('dispatches the right actions', () => {
    getActivity.mockImplementation(() => {
      return Promise.resolve({
        activity: 'write a test',
      })
    })

    return fetchActivity()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_ACTIVITY,
        payload: {
          activity: 'write a test',
        },
      })
    })
  })

  it('dispatches the right actions when the moon is haunted', () => {
    getActivity.mockImplementation(() => {
      return Promise.reject(new Error(`Moon's haunted`))
    })
    return fetchActivity()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: FETCH_ACTIVITY_FAILED,
        payload: `Moon's haunted`,
      })
    })
  })
})
