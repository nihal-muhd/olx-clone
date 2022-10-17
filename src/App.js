import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import CreatePage from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import Post from './store/PostContext';

import { AuthContext, FirebaseContext } from './store/Context'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';


function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
        <Router>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signup'>
            <SignupPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/create'>
            <CreatePage />
          </Route>
          <Route path='/view'>
            <ViewPost />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
