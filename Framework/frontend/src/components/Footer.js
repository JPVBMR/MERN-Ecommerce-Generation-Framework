import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = ({ rodape }) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>{rodape}</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
