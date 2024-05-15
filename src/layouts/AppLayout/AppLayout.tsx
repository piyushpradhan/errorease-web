import { Outlet } from 'react-router-dom'
import AppNav from 'src/components/AppNav/AppNav'
import Sidebar from 'src/components/Sidebar/Sidebar'

export default function AppLayout() {
  return (
    <main className="flex min-h-screen flex-col">
      <AppNav />

      <div className="flex flex-grow flex-col lg:flex-row">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>

        <div className="flex flex-grow ">
          <Outlet />
        </div>
      </div>
    </main>
  )
}
