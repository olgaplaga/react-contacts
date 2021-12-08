import './App.css';
import React from 'react';
import PersonForm from './components/PersonForm';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }} xs={12} lg={{ span: 8, offset: 2 }}>
            <PersonForm />
          </Col>
          .
        </Row>
      </Container>
    </>
  );
}

export default App;
