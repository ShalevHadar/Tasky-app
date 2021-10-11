import React from "react";
import { Button, Stack, Card } from "react-bootstrap";

export default function Nav() {
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
          <Stack gap={2} className="col-md-3 mx-auto">
            <Button variant="secondary">Login</Button>
            <Button variant="outline-secondary">Cancel</Button>
          </Stack>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
}
