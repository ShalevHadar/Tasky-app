import React from 'react'
import {  Button  } from "react-bootstrap";


export default function Nav() {
    return (
        <div>
        <div className="d-grid gap-2">
  <Button variant="primary" size="lg">
    Block level button
  </Button>
  <Button variant="secondary" size="lg">
    Block level button
  </Button>
</div>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="danger">Danger</Button>
        </div>
    )
}
