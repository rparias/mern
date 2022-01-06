import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import routes from '../routers/routes'

const NotFoundPage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <img style={{ width: '100%' }} src="/img/404-not-found.svg" alt="error-404" />
          <h2>Page not found</h2>
          <p>
            Return to <Link to={routes.home}>home page</Link>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFoundPage
