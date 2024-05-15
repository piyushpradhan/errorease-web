import { createBrowserRouter } from 'react-router-dom'

import AppLayout from './layouts/AppLayout/AppLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Issue from './pages/Issue/Issue'

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
        element: <Dashboard />,
      },
      {
        path: '/issue/:issueId',
        element: <Issue />,
      },
    ],
  },
])
