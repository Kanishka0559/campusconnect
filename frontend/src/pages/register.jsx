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
          />

          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="password"
            placeholder="Create password"
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