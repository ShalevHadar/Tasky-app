import React from 'react'
import { Form, Button, Card, Container } from "react-bootstrap";

export default function Dashboard() {

    const onLogout = () => {
        
    }







    return (
        <div>
           <Container>
           <h1 className="text-center">Hello X</h1>
          <Button onClick={onLogout} className="w-100" type="submit">
              Logout
            </Button>
      </Container>
        </div>
    )
}


