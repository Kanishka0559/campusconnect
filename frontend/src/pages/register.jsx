import "./Auth.css";

function Register() {
  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Create Account</h1>
        <p>Join CampusConnect today.</p>

        <form>

          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="password"
            placeholder="Create password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;