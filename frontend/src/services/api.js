import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:9003'
})

export default api