import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

export default function Signup() {
  return (
    <div>
      <Container>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form.Group id="nick">
            <Form.Label>Nickname</Form.Label>
            <Form.Control name="nickname" type="nickname" required />
          </Form.Group>
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
          
        </Card.Body>
      </Container>
    </div>
  );
}
