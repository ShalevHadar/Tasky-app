import React from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"

export default function Login() {
    return (
        <div>
            <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"  required />
            </Form.Group>
            </Card.Body>
        </div>
    )
}
