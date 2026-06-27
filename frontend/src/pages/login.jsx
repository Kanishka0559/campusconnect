
import { useState } from "react";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
  e.preventDefault();

  if (email.trim() === "") {
    alert("Email is required");
  } else if (!email.endsWith("@gmail.com")) {
    setEmailError("Please enter a valid Gmail address.");
    valid = false;
  
  } else if (password.trim() === "") {
    alert("Password is required");
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters");
  } else {
    alert("Login Successful");
  }
};

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Welcome Back</h1>
        <p>Login to continue your journey.</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>
        </form>

      </div>

    </div>
  );
}

export default Login;