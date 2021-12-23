import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import routes from '../../routers/routes'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={NavLink} to={routes.home}>
        Task Manager
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to={routes.projects}>
            Projects
          </Nav.Link>
          <NavDropdown title="Admin" id="collasible-nav-dropdown">
            <NavDropdown.Item as={NavLink} to={routes.admin.users}>
              Users
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to={routes.login}>
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to={routes.register}>
            Register
          </Nav.Link>
          <Nav.Link as={NavLink} to={routes.account}>
            Account
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
