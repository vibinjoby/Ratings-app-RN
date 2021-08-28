import axios from 'axios'

axios.interceptors.response.use(undefined, (error) => {
  if (error && error.response && error.response.status >= 400 && error.response.status <= 500) {
    console.log(error.response.request._response)
  }
  if (error && error.response && error.response.request && error.response.request._response)
    return Promise.reject(error.response.request._response)

  return Promise.reject(error)
})

const setHeader = (token: string) => {
  axios.defaults.headers.common['authorization'] = token
}

export default {
  setHeader,
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}
