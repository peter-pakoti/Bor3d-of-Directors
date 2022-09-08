import request from 'superagent'

const rootUrl = '/api/v1'

export function getActivity() {
  return request.get(rootUrl + '/activity').then((res) => {
    return res.body
  })
}
