import React from 'react'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '../components/layouts'
import roles from '../helpers/roles'
import routes from './routes'
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
            path={routes.home}
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            exact
            path={routes.login}
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            exact
            path={routes.register}
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            exact
            path={routes.account}
            element={
              <PrivateRoute>
                <AccountPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path={routes.projects}
            element={
              <PrivateRoute>
                <ProjectsPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path={routes.project()}
            element={
              <PrivateRoute>
                <ProjectPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path={routes.admin.users}
            element={
              <PrivateRoute hasRole={roles.ADMIN}>
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
