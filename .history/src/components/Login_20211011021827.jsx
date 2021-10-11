import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

export default function Login() {
  return (
    <div>
    <Container md="">
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
        <Link></Link>
      </Card.Body>
      </Container>
    </div>
  );
}
