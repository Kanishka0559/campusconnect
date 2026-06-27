import { useState } from "react";
import "./Auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let valid = true;

    if (name.trim() === "") {
      setNameError("Full name is required");
      valid = false;
    }

    if (email === "") {
      setEmailError("Email is required");
      valid = false;
    } else if (!email.endsWith("@gmail.com")) {
      setEmailError("Email must end with @gmail.com");
      valid = false;
    }

    if (password === "") {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must contain at least 6 characters");
      valid = false;
    }

    if (confirmPassword === "") {
      setConfirmPasswordError("Confirm your password");
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      valid = false;
    }

    if (valid) {
      alert("Registration Successful");
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Create Account</h1>

        <p>
          Join CampusConnect and connect with students,
          mentors and opportunities.
        </p>

        <button className="google-btn" type="button">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="google"
          />

          Continue with Google
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          {nameError && (
            <p className="error">{nameError}</p>
          )}

          <input
            type="email"
            placeholder="College / Personal Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          {emailError && (
            <p className="error">{emailError}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          {passwordError && (
            <p className="error">{passwordError}</p>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />

          {confirmPasswordError && (
            <p className="error">{confirmPasswordError}</p>
          )}

          <button className="register-btn" type="submit">
            Create Account
          </button>

        </form>

        <p className="bottom-text">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

      </div>

    </div>
  );
}

export default Register;