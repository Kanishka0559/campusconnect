import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🎓 CampusConnect
      </div>

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>

      <button className="start-btn">
        Get Started
      </button>

    </nav>
  );
}

export default Navbar;