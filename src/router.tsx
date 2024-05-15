import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './layouts/AppLayout/AppLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: '/dashboard',
        element: <div>Dashboard</div>,
      },
    ],
  },
])
