import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const history = useNavigate()
  const [user, setUser] = useState(null)

  const login = (userCredentials, fromLocation) => {
    setUser({ id: 1, role: 'admin' })
    if (fromLocation) {
      history.push(fromLocation)
    }
  }

  const logout = () => setUser(null)

  // !! for casting user to boolean
  const isLogged = () => !!user

  const hasRole = (role) => user?.role === role

  const contextValue = {
    user,
    isLogged,
    hasRole,
    login,
    logout
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { AuthContext, AuthProvider }
