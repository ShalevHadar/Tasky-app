import { getAuth, signOut } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Placeholder, Stack } from "react-bootstrap";
import { useHistory } from "react-router";

export default function Dashboard() {
  const history = useHistory();

  const [item, setItem] = useState({
      content: "",
      price: 0,
  });

  const addItem =() => {
    console.log(item.price);
}

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
          defaultValue={item.content}
          onChange={e => setItem(e.target.value)}
            className="me-auto"
            placeholder="Add your item here..."
          />
          <Form.Control
          defaultValue={item.price}
          onChange={e => setItem(e.target.value)}
            className="me-auto"
            placeholder="Price..."
            style={{ width: "25%" }}
          />
          <div className="vr" />
          <Button onClick={addItem} variant="success">Submit</Button>
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
