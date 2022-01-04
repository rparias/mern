import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const initialUser = { id: 1, role: 'admin' }
  // const initialUser = null
  const [user, setUser] = useState(initialUser)

  // !! for casting user to boolean
  const isLogged = () => !!user

  const hasRole = (role) => user?.role === role

  const contextValue = {
    user,
    isLogged,
    hasRole
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { AuthContext, AuthProvider }
