import "./Auth.css";

function Login() {
  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Welcome Back</h1>
        <p>Login to continue your journey.</p>

        <form>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="password"
            placeholder="Enter your password"
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