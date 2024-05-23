// src/pages/Home.js

import { Container, Row, Col, Form, Button, ListGroup,Table } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';

const Home = () => {
  return <Container>
  <Row className="justify-content-md-center">
  <Col md={6}>

  <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </Col>
    <Col md={6}>
      <h1 className="text-center">Chat Room</h1>
      <Form>
        <Form.Group controlId="formMessage">
          <Form.Control
            type="text"
            placeholder="Enter message"
          />
        </Form.Group>
        <Button variant="primary" type="button" className="mt-2">
          Send
        </Button>
      </Form>
    </Col>
  </Row>
</Container>;
};

export default Home;
