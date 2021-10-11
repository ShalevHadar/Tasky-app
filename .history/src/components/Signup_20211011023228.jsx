import React, {useState} from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

export default function Signup() {
    const empty = "";
    const [nick, setNick] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()

  return (
    <div>
      <Container>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form.Group id="nick">
            <Form.Label>Nickname</Form.Label>
            <Form.Control onChange={e => setNick(e.target.value)} value="nick" placeholder={empty} name="nick" type="nick" required />
          </Form.Group>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={e => setEmail(e.target.value)} value="email" name="email" type="email" required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={e => setPassword(e.target.value)} value="password" name="password" type="password" required />
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