import request from 'superagent'

const rootUrl = '/api/v1'

export function getActivity() {
  return request.get(rootUrl + '/activity').then((res) => {
    console.log(res.body)
    return res.body
  })
  // return '/api/v1/activity'
}

// console.log(getActivity())
