import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import Navigator from './Navigator';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import Nav from './Nav';
import { initilizeFirebase } from '../utils/firebase';

initilizeFirebase();

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
