import React from 'react'
import { Form, Button, Card, Container } from "react-bootstrap";

export default function Dashboard() {
    return (
        <div>
            <Button onClick={onSignup} className="w-100" type="submit">
              {loading ? 'Creating user..' : 'Signup'}
            </Button>
        </div>
    )
}


