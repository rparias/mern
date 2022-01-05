import React from 'react'
import useAuth from '../auth/useAuth'

const userCredentials = {}

const LoginPage = () => {
  const { login } = useAuth()
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => login(userCredentials)}>Login</button>
    </div>
  )
}

export default LoginPage
