import React from "react";
import { Button, Stack, Card } from "react-bootstrap";
import { useHistory } from "react-router";

export default function Nav() {
    const history = useHistory();


    const onLogin = () => {
        history.push('/login')
    }

    const onSignup = () => {
        history.push('/signup')
    }

  return (
    <div className="gapped">
      <Stack gap={2} className="col-md-5 mx-auto"></Stack>

      <Card className="text-center">
        <Card.Header>Copyrights @2022 Shalev Hadar</Card.Header>
        <Card.Body>
          <Card.Title>Welcome to Tasky App</Card.Title>
          <Card.Text>
            <div>
              If you got a user already just click on the 'Login' button.
            </div>
            <div>else, click on the 'Signup' button and start!</div>
          </Card.Text>
          <Stack gap={2} className="col-md-3">
            <Button onClick={onLogin} variant="secondary">Login</Button>
            <Button onClick={onSignup} variant="outline-secondary">Signup</Button>
          </Stack>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
}
