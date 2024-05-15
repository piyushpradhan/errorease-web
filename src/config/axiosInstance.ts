/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

const serverURL = import.meta.env.VITE_SERVER_URL

export const axiosClient = axios.create({
  baseURL: serverURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

axiosClient.interceptors.request.use(
  (config: any) => {
    const accessToken = localStorage?.getItem('accessToken')

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }

    return config
  },
  (error: any) => {
    return Promise.reject(error)
  },
)