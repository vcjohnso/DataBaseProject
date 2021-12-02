import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/loginForm"
import NavBar from "./NavBar";
import Mainpage from "./Mainpage";
import SearchPage from "./SearchPage";
import SeatsPage from "./SeatsPage";
import BookingPage from "./BookingPage";
import useToken from "./components/useToken";


const App = () => {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route path="/" exact component={Mainpage} />
          <Route path="/search" component={SearchPage}/>
          <Route path="/seats" component={SeatsPage}/>
          <Route path="/booking" component={BookingPage}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
