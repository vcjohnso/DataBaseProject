import { NavLink } from "react-router-dom";
import "./loginNav.css";

const LoginNavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <p className="nav-logo">
          FlightCity
        </p>
      </div>
    </nav>
  );
};

export default LoginNavBar;