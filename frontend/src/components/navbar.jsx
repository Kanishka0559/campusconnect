import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLoggedIn }) {
  return (
    <nav className="navbar">

      <div className="logo">
        🎓 CampusConnect
      </div>

      <div className="nav-center">
        <Link to="/">Home</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/profile">Profile</Link>
          </>
        )}
      </div>

    </nav>
  );
}

export default Navbar;