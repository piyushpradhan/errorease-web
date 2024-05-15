import { createBrowserRouter } from 'react-router-dom'

import AppLayout from './layouts/AppLayout/AppLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Issue from './pages/Issue/Issue'
import SignIn from './pages/SignIn/SignIn'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    path: '/signin',
    element: <SignIn />,
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
