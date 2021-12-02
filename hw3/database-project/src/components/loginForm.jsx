import React, { useState } from "react";
import './LoginForm.css'
import PropTypes from 'prop-types';
import LoginNavBar from "./loginNav"
import queryHandler from './queryHandler';

export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const qLogin = "login"
    const token = queryHandler(qLogin,{
      username,
      password
    });
    setToken(token);
  }

  return(
    <div>
      <LoginNavBar />
      <div className="login-wrapper"
        style={{
          padding: "1rem 1rem 1rem",
          border: "double #f7f7f9",
          backgroundColor: "rgb(220, 220, 220, 0.5)",
          boxSizing: "content-box",
        }}
      >
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label class="m-2">
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}