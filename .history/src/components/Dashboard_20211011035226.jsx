import { getAuth, signOut } from '@firebase/auth';
import React, { useEffect } from 'react'
import {  Button, Container } from "react-bootstrap";
import { useHistory } from 'react-router';

export default function Dashboard() {
    const history = useHistory();


    const onLogout = () => {
        signOut(auth)
        .then(() => {
            localStorage.removeItem('token')
            history.push('/')
        })
        .catch(() => alert(e.message));
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            history.push('/')
        }
    })

    const auth = getAuth();
    const user = auth.currentUser;

    return (
        <div>
           <Container className="text-center">
           <h1 className="text-center">Hello {user && user.displayName}</h1>
          <Button onClick={onLogout} variant="danger" className="col-md-3 mx-auto" type="submit">
              Logout
            </Button>
      </Container>
        </div>
    )
}


