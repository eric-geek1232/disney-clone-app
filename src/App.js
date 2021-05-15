import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './componets/Header';
import Home from './componets/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './componets/Detail';
import Login from './componets/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/detail/:id">
            <Detail/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;