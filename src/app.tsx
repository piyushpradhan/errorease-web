import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import queryClient from './config/queryClient'
import AuthProvider from './contexts/AuthContext/AuthContext'
import { router } from './routes/router'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
