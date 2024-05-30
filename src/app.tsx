import React, { useMemo } from 'react'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from 'axios'

import { router } from './router'

export const axiosInstance = axios.create({})

export default function App() {
  const queryClient = useMemo(() => new QueryClient({}), [])

  let authToken = ''

  axiosInstance.interceptors.response.use(
    function (response) {
      // Extract the token from the Set-Cookie header
      const setCookieHeader = response.headers['set-cookie']
      if (setCookieHeader) {
        const tokenCookie = setCookieHeader.find((cookie) => cookie.startsWith('your-token-cookie-name='))
        if (tokenCookie) {
          authToken = tokenCookie.split('=')[1].split(';')[0] // Adjust splitting based on actual cookie structure
          localStorage.setItem('accessToken', authToken)
        }
      }
      return response
    },
    function (error) {
      // Handle the response error
      return Promise.reject(error)
    },
  )

  axiosInstance.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('accessToken')
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    },
    function (error) {
      return Promise.reject(error)
    },
  )

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
