import React from 'react'
import AppRouter from './routers/AppRouter'
import { AuthProvider } from './auth/AuthProvider'
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from './components/layouts'
// <Layout> is a wrapper for all pages.

function App() {
  return (
    <Router basename="/">
      <AuthProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </AuthProvider>
    </Router>
  )
}

export default App
