import React, {useState} from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { getAuth, create } from 'firebase/auth'

export default function Signup() {
    
    const [nick, setNick] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()

    const onSignup = () => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth,email,password)
    }

  return (
    <div>
      <Container>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form.Group id="nick">
            <Form.Label>Nickname</Form.Label>
            <Form.Control onChange={e => setNick(e.target.value)} defaultValue={nick} placeholder="" name="nick" type="nick" required />
          </Form.Group>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={e => setEmail(e.target.value)} defaultValue={email} name="email" type="email" required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={e => setPassword(e.target.value)} defaultValue={password} name="password" type="password" required />
          </Form.Group>
          <Form.Group id="button">
            <Form.Label className="White"> . </Form.Label>
            <Button onClick={onSignup} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form.Group>
          
        </Card.Body>
      </Container>
    </div>
  );
}
