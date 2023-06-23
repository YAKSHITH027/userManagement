import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Settings from './pages/Settings'
import Sidebar from './components/Sidebar'

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Sidebar>
            <Settings />
          </Sidebar>
        }
      />
    </Routes>
  )
}

export default AllRoutes
