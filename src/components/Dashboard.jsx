import { getAuth, signOut } from "@firebase/auth";
import {
  setDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
} from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import { useHistory } from "react-router";
import { getDB } from "../utils/firebase";

export default function Dashboard() {
  const auth = getAuth();
  const user = auth.currentUser;
  const history = useHistory();
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState([]);

  const showItems = () => {
    console.log(items);
  };

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const addItem = () => {
    const db = getDB();
    const newTaskRef = doc(collection(db, "spends"));
    setDoc(newTaskRef, {
      text: content,
      amount: price,
      user: user.uid,
    });
  };

  const fetchItems = async () => {
    const db = getDB();
    if (user && user.uid) {
      const q = query(collection(db, "spends"), where("user", "==", user.uid));
      try {
        const results = await getDocs(q);
        let resultItems = [];
        results.forEach((doc) => {
          resultItems.push({
            ...doc.data(),
            uid: doc.id,
          });
          setItems(resultItems);
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    fetchItems();
  });

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
            onChange={(e) => setContent(e.target.value)}
            className="me-auto"
            placeholder="Add your item here..."
          />
          <Form.Control
            type="number"
            defaultValue={price}
            onChange={(e) => setPrice(e.target.value)}
            className="me-auto"
            placeholder="Price..."
            style={{ width: "20%" }}
          />
          <div></div>
          <Button onClick={addItem} variant="success">
            Submit
          </Button>
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
        <Button
          variant="danger"
          className="col-md-3 mx-auto"
          type="submit"
          onClick={showItems}
        >
          showlogs
        </Button>
      </Container>
      {items.map(item => (
        <div key={item.uid}>{item.text}</div>
      ))}    
      </div>
  );
}
