import React from "react";
import { Button, Stack, Card } from "react-bootstrap";

export default function Nav() {
  return (
    <div className="gapped">
      <Stack gap={2} className="col-md-5 mx-auto">
        <Button variant="secondary">Signup</Button>
        <Button variant="outline-secondary">Login</Button>
      </Stack>

      <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
    </div>
  );
}
