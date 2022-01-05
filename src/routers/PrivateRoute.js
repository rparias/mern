import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from './routes'

const PrivateRoute = ({ hasRole: role, children }) => {
  const location = useLocation()
  const { hasRole, isLogged } = useAuth()

  if (role && !hasRole(role)) return <Navigate to={routes.home} />

  return isLogged() ? (
    children
  ) : (
    <Navigate to={{ pathname: routes.login, state: { from: location } }} />
  )
}

PrivateRoute.propTypes = {
  hasRole: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default PrivateRoute
