import './App.css';
import { Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Home from './screens/Home/Home'
import Books from './screens/Books/Books'
import BookDetail from './screens/BookDetail/BookDetail'
import { verifyUser } from './services/users'
import SignUp from './screens/SignUp/SignUp'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  const clearUser = () => setUser(null)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/books">
          <Books user={user} />
        </Route>
        <Route path="/book/:id">
          <BookDetail user={user} />
        </Route>
        <Route path="sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="sign-out">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
