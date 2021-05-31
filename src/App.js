import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import HomePage from './components/HomePage/HomePage/HomePage';
import NavBar from './components/HomePage/NavBar/NavBar';
import LogIn from './components/LogIn/LogIn/LogIn';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value= {[loggedInUser, setLoggedInUser]}>
      <Router>
      <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
          <HomePage></HomePage>
          </Route>
      <Route path="/login">
        <LogIn></LogIn>
      </Route>
      <Route path= "/dashBoard">
        <DashBoard></DashBoard>
      </Route>
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
