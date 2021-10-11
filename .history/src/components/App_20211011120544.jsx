import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import Navigator from './Navigator';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import Nav from './Nav';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_B_APP_ID
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
      <Navigator/>
        <Switch>
          <Route exact path="/" component={Nav}/>
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
