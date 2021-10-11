import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login'
import Signup from './Signup'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
