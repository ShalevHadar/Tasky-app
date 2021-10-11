import { getAuth, signOut } from "@firebase/auth";
import React, { useEffect } from "react";
import { Button, Card, Container, Form, Stack } from "react-bootstrap";
import { useHistory } from "react-router";

export default function Dashboard() {
  const history = useHistory();

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
      <Container>
        <h1 className="text-center ">
          Hello {user && user.displayName}
        </h1>
        <Stack direction="horizontal" gap={3} className="gap2">
          <Form.Control id="floatingInputCustom" type="item" placeholder=" " />
          <Form.Control
            id="floatingPasswordCustom"
            type="item"
            placeholder=" "
          />
          <Button variant="secondary">Submit</Button>
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
