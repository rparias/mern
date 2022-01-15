import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import routes from '../routers/routes'

const HomePage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
          <h2>Welcome to the Task Manager</h2>
          <p>Here you can manage your projects!</p>
          <p>You can add, modify, update or delete your tasks</p>
          <div>
            <Link to={routes.login}>Login</Link> or{' '}
            <Button as={Link} to={routes.register} className="ml-1">
              Sign Up
            </Button>
          </div>
        </Col>
        <Col>
          <img src="/img/task-manager.svg" alt="task-manager" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
