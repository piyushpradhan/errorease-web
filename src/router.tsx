import { createBrowserRouter } from 'react-router-dom'

import AppLayout from './layouts/AppLayout/AppLayout'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Issue from './pages/Issue'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
