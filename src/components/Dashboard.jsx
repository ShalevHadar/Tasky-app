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
import ItemCard from "./ItemCard";

export default function Dashboard() {
  let db = getDB();
  const auth = getAuth();
  const user = auth.currentUser;
  const history = useHistory();
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState([]);

  const showItems = () => {
    //fetchItems();
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


useEffect(() => {
  const fetchNames = async () => {
    try {
      const q = query(collection(db, "spends"), where("user", "==", user.uid));
      const docs = await getDocs(q);
      let resultItems = [];
      docs.forEach((doc) => {
        const data = doc.data();
        resultItems.push({
          text: data.text,
          price: data.amount,
          uid: doc.id,
        });
      });
      setItems(resultItems);
    } catch (error) {
      console.log("error", error);
    }
  };

  fetchNames();
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
          <Button onClick={addItem} variant="success">
            Submit
          </Button>
        </Stack>

        <Stack direction="horizontal" gap={3} className="gap2">
          <div>
            {items.map((item) => (
              <p key={item.uid}>{item.text}-----{item.price}</p>
            ))}
          </div>
          <div>
          <ItemCard/>
          </div>
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
    </div>
  );
}
