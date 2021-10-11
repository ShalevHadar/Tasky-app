import React, { useEffect } from 'react'
import {  Button, Container } from "react-bootstrap";
import { useHistory } from 'react-router';

export default function Dashboard() {
    const history = useHistory();


    const onLogout = () => {
        localStorage.removeItem('token');
        history.push('/')
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            history.push('/')
        }
    })

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


