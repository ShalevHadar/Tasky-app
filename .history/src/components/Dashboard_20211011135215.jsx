import { getAuth, signOut } from "@firebase/auth";
import { collection, doc, setDoc } from "@firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import { useHistory } from "react-router";
import { getDB } from "../utils/firebase";

export default function Dashboard() {

    const auth = getAuth();
  const user = auth.currentUser;

  const history = useHistory();

  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const addItem = useCallback(() => {
    const db = getDB();
    const newTaskRef = doc(collection(db,"spends"));

    setDoc(newTaskRef, {
        content: content,
        price: price,
    });
}, [content, price])

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/");
    }
  });

  

  return (
    <div>
      <Container className="text-center">
        <h1>Hello {user && user.displayName}</h1>

        <Stack direction="horizontal" gap={3} className="gap2">
          <Form.Control
          defaultValue={content}
          onChange={e => setContent(e.target.value)}
            className="me-auto"
            placeholder="Add your item here..."
          />
          <Form.Control
          defaultValue={price}
          onChange={e => setPrice(e.target.value)}
            className="me-auto"
            placeholder="Price..."
            style={{ width: "25%" }}
          />
          <div className="vr" />
          <Button onClick={addItem}variant="success">Submit</Button>
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
