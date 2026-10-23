import { Routes, Route, Outlet } from 'react-router'
import DashboardPage from './pages/DashboardPage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import UsersPage from './pages/UsersPage.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'

function App() {
   return (<>    
   <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    <Outlet></Outlet>
    </>

  )
}

export default App
