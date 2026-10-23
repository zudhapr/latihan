import { Routes, Route, Outlet } from 'react-router'
import DashboardPage from './pages/DashboardPage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
   return (<>    
   <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Outlet></Outlet>
    </>

  )
}

export default App
