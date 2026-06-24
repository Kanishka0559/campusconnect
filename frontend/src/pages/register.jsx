function Register() {
  return (
    <div className="container">
      <h1>Create Account</h1>

      <input type="text" placeholder="Name" />
      <br /><br />

      <input type="email" placeholder="Email" />
      <br /><br />

      <input type="password" placeholder="Password" />
      <br /><br />

      <button>Register</button>
    </div>
  );
}

export default Register;