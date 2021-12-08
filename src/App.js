import './App.css';
import React from 'react';
import PersonForm from './components/PersonForm';
import { Container, Row, Col } from 'react-bootstrap';
import PeopleList from './components/PeopleList'
import { Toaster } from 'react-hot-toast';

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
        
        <Row className="mt-md-3 mt-lg-5">
          <Col><PeopleList/></Col>
        </Row>
      </Container>
      <Toaster/>
    </>
  );
}

export default App;
