import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import useAuth from '../auth/useAuth'

const PrivateRoute = ({ children }) => {
  // const isAuthenticated = true
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" />
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default PrivateRoute
