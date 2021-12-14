import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const isAuthenticated = true
  return isAuthenticated ? children : <Navigate to="/login" />
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default PrivateRoute
