import React, {useState, useEffect} from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {  useHistory, Link  } from "react-router-dom";



export default function Signup() {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            history.push('/dashboard')
        }
    })

    const [nick, setNick] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [ loading, setLoading ] = useState(false);

    const onSignup = () => {
        setLoading(true);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            updateProfile(auth.currentUser, { displayName: nick })
                .then(() => history.push('/login') )
                .catch((e) => alert(e.message))
        }).catch((e) => alert(e.message))
        .finally(() => setLoading(false));
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
            <Button bg="danger" onClick={onSignup} className="w-100" type="submit">
              {loading ? 'Creating user..' : 'Signup'}
            </Button>
          </Form.Group>
          <Link bg="danger" to="/login">Have an account? click here</Link>
        </Card.Body>
      </Container>
    </div>
  );
}
