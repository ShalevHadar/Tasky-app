import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import Nav from './Nav';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR4B-fqLnF0N300COZ3P3Y5NQzEXYg5y0",
  authDomain: "task-app-1c8fa.firebaseapp.com",
  projectId: "task-app-1c8fa",
  storageBucket: "task-app-1c8fa.appspot.com",
  messagingSenderId: "185237398558",
  appId: "1:185237398558:web:cae5da9ce29526e3fb7a0f"
};

// Initialize Firebase
initializeApp(firebaseConfig);


function App() {
  const [, setUser] = useState()

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      setUser(user);
    })
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Nav}/>
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/navigator" component={Navigator} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
