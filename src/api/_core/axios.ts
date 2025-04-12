import axios from 'axios'
import cookies from 'js-cookie'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = cookies.get('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
