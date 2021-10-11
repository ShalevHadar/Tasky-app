import React from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";

export default function Login() {
  return (
    <div>
    <Container>
      <Card.Body>
        <h2 className="text-center mb-4">Log In</h2>
        <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <Form.Group id="button">
          <Form.Label className="White"> . </Form.Label>
          <Button className="w-100" type="submit">
              Log In
            </Button>
        </Form.Group>
      </Card.Body>
      </Container>
    </div>
  );
}