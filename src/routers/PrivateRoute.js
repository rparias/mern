import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import useAuth from '../auth/useAuth'

const PrivateRoute = ({ hasRole: role, children }) => {
  const { user } = useAuth()

  if (role && user?.role !== role) return <Navigate to="/" />

  return user ? children : <Navigate to="/login" />
}

PrivateRoute.propTypes = {
  hasRole: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default PrivateRoute
