import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
function App() {
  return (
    <>

      <Router>
        <div className="app">
          <Switch>
            <Route path="/h" ><h1><Header/>home</h1></Route>
            <Route path="/l" ><h1>login</h1></Route>
            <Route path="/s" ><h1>subscribe</h1></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
