import React from 'react'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '../components/layouts'
import {
  AccountPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProjectPage,
  ProjectsPage,
  RegisterPage,
  UsersPage
} from '../pages'

const AppRouter = () => {
  return (
    <Router basename="/">
      {/* <Layout> is a wrapper for all pages. */}
      <Layout>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="/account"
            element={
              <PrivateRoute>
                <AccountPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/projects"
            element={
              <PrivateRoute>
                <ProjectsPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/project/:id"
            element={
              <PrivateRoute>
                <ProjectPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/admin/users"
            element={
              <PrivateRoute hasRole="admin">
                <UsersPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRouter
