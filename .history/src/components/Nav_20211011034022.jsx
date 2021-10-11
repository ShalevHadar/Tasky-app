import React from "react";
import { Button, Stack, Card } from "react-bootstrap";


export default function Nav() {

  return (
    <div className="gapped">
      <Stack gap={2} className="col-md-5 mx-auto"></Stack>

      <Card className="text-center">
        <Card.Header>Welcome</Card.Header>
        <Card.Body>
          <Card.Title>Welcome to Tasky App</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Stack gap={2} className="col-md-5 mx-auto">
            <Button variant="secondary">Save changes</Button>
            <Button variant="outline-secondary">Cancel</Button>
          </Stack>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
}
