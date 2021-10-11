import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Navigator() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="">Tasky App</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
