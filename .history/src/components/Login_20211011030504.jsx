import React, { useEffect, useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import {  useHistory  } from "react-router-dom";

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            history.push('/dashboard')
        }
    })

    const onLogin = () => {
        setLoading(true)
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCreds) => {
            localStorage.setItem('token', userCreds._tokenResponse.idToken);
            history.push('/dashboard');
        })
        .catch((e) => alert(e.message))
        .finally(() => setLoading(false))
    }

  return (
    <div>
    <Container>
      <Card.Body>
        <h2 className="text-center mb-4">Log In</h2>
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
          <Button onClick={onLogin} className="w-100" type="submit">
              {loading ? 'Logging you in...' : 'Login'}
            </Button>
        </Form.Group>
        <Link className="danger" to="/signup">Don't have an account? click here</Link>
      </Card.Body>
      </Container>
    </div>
  );
}
