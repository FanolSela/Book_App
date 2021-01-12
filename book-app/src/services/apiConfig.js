import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
      ? 'https://sei-products-api.herokuapp.com'
      : 'http://localhost:3000'
})

const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}

api.interceptors.request.use(async function (options) {
  options.headers['Authorization'] = await getToken()
  return options
}, function (error) {
  console.log('Request error: ', error)
  return Promise.reject(error)
});

export default api