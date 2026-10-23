import { Outlet, useLocation } from 'react-router'
import Header from '../components/organisms/Header'
import Sidebar from '../components/organisms/Sidebar'

export default function AdminLayout() {
  const { pathname } = useLocation()
  const titles = {
    '/dashboard': 'Dashboard',
    '/courses': 'Mata Kuliah',
    '/users': 'Pengguna',
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header title={titles[pathname] ?? 'Admin'} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
