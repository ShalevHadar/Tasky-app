import React from 'react'
import { Form, Button, Card, Container } from "react-bootstrap";

export default function Dashboard() {
    return (
        <div>
           <Container>
      <Card.Body>
      <Form.Group>
          <Button className="w-50" type="submit">
              Click
            </Button>
        </Form.Group>
      </Card.Body>
      </Container>
        </div>
    )
}


