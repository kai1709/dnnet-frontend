import axios from 'axios'
// import Cookies from 'js-cookie'

axios.defaults.headers['Accept'] = 'application/vnd.user-backend.v1'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Cache-Control'] = 'no-cache'

axios.defaults.timeout = 5 * 60 * 60 * 1000

const TOKEN = 'gr0J-3BxjrLQ8DVCWttFXNwgs5KF1v9g'

axios.interceptors.request.use(
  config => {
    const token = TOKEN
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios
