import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <Container>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
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
              Sign Up
            </Button>
          </Form.Group>
          <Link className="danger" to="/signup">
            Don't have an account? click here
          </Link>
        </Card.Body>
      </Container>
    </div>
  );
}
