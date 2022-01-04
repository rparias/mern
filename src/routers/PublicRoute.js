import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from './routes'

const PublicRoute = ({ children }) => {
  const { isLogged } = useAuth()
  return isLogged() ? <Navigate to={routes.projects} /> : children
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default PublicRoute
