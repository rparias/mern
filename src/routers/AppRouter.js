import React from 'react'
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
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/account" element={<AccountPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/project/:id" element={<ProjectPage />} />
          <Route exact path="/admin/users" element={<UsersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRouter
