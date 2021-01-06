import './App.css';
import { Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Home from './screens/Home/Home'
import Books from './screens/Books/Books'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
