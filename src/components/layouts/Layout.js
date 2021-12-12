import React from 'react'
import PropTypes from 'prop-types'
import Navigation from '../Navigation'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
