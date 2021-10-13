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
  const [disable, setDisable] = React.useState(false);


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
    fetchNames();
  };

    
    const fetchNames = async () => {
      console.log("Asd");
      try {
        const q = query(
          collection(db, "spends"),
          where("user", "==", user.uid)
        );
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
    

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/");
    }
  });

  return (
    <div>
      <Container className="text-center gap2">
        <h1 className="Title">Hello {user && user.displayName}</h1>
        <Button  onClick={() => {
          fetchNames();
          setDisable(true)
        }
        }>Unhide Data</Button>
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

          <Button onClick={addItem} variant="outline-dark">
            Submit
          </Button>
        </Stack>
        <ItemCard
          text={items.map((item) => (
            <p key={item.uid}>{item.text}</p>
          ))}
          price={items.map((item) => (
            <p key={item.uid}>{item.price}</p>
          ))}
        />
        <div className="smallMoney"><h3>How Much Money Have I Spent?</h3></div>
        <div><h3 className="texth3">{items.reduce(function (accumulator,item) {
          return (
            parseInt(accumulator) + parseInt(item.price)
          )
        }, 0)}</h3></div>
        <Button
          onClick={onLogout}
          animation="glow"
          variant="outline-secondary"
          className="col-md-3 mx-auto gap2"
          type="submit"
        >
          Logout
        </Button>
      </Container>
    </div>
  );
}
