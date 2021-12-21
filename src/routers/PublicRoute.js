import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import useAuth from '../auth/useAuth'

const PublicRoute = ({ children }) => {
  const { user } = useAuth()
  return user ? <Navigate to="/projects" /> : children
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default PublicRoute
