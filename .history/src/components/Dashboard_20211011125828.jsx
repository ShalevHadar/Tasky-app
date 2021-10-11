import { getAuth, signOut } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Placeholder, Stack } from "react-bootstrap";
import { useHistory } from "react-router";

export default function Dashboard() {
  const history = useHistory();

  const [task, setTask] = useState();

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/");
    }
  });

  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div>
      <Container className="text-center">
        <h1>Hello {user && user.displayName}</h1>

        <Stack direction="horizontal" gap={3} className="gap2">
          <Form.Control
            className="me-auto"
            placeholder="Add your item here..."
          />
          <Form.Control
            className="me-auto"
            placeholder="Price..."
            style={{ width: "25%" }}
          />
          <div className="vr" />
          <Button variant="success">Submit</Button>
        </Stack>

        <Button
          onClick={onLogout}
          animation="glow"
          variant="secondary"
          className="col-md-3 mx-auto"
          type="submit"
        >
          Logout
        </Button>
      </Container>
    </div>
  );
}
