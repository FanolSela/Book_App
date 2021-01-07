import './App.css';
import { Route, Switch } from 'react-router-dom'
import React from 'react'
import Home from './screens/Home/Home'
import Books from './screens/Books/Books'
import BookDetail from './screens/BookDetail/BookDetail'

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
        <Route path="/book/:id">
          <BookDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
