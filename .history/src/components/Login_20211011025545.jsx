import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Login() {
    const [nick, setNick] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

  return (
    <div>
    <Container>
      <Card.Body>
        <h2 className="text-center mb-4">Log In</h2>
        <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" required />
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" required />
        </Form.Group>
        <Form.Group id="button">
          <Form.Label className="White"> . </Form.Label>
          <Button className="w-100" type="submit">
              Log In
            </Button>
        </Form.Group>
        <Link className="danger" to="/signup">Don't have an account? click here</Link>
      </Card.Body>
      </Container>
    </div>
  );
}
