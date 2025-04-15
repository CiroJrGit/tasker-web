import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import AppLayout from '../layouts/AppLayout'

import Auth from '../pages/Auth/Auth'
import Welcome from '../pages/Welcome/Welcome'
import TaskList from '../pages/TaskList/TaskList'
import Note from '../pages/Note/Note'
import AuthLayout from '../layouts/AuthLayout'

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthLayout>
            <Auth />
          </AuthLayout>
        }
      />

      <Route
        path="/welcome"
        element={
          <PrivateRoute redirectTo="/">
            <AppLayout>
              <Welcome />
            </AppLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/tasklists/:id"
        element={
          <PrivateRoute redirectTo="/">
            <AppLayout>
              <TaskList />
            </AppLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/notes/:id"
        element={
          <PrivateRoute redirectTo="/">
            <AppLayout>
              <Note />
            </AppLayout>
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default AppRoutes
