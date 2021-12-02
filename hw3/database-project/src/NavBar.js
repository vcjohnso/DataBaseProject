import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavDropdown } from 'react-bootstrap'
import "./NavBar.css";

function Logout() {
  sessionStorage.clear()
  window.location.reload(false);
}

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          FlightCity
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active "
              className="nav-links"
            >
              <b> Home </b>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/search"
              activeClassName="active "
              className="nav-links"
            >
              <b> Search for Flights </b>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to
              activeClassName="active "
              className="nav-links"
              onClick={Logout}
            >
              <b> Log Out </b>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;