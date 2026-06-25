import "./Home.css";

function Home() {
  return (
    <div className="hero">

      <div className="hero-left">

        <h2>Welcome to CampusConnect</h2>

        <h3>
          Connect. Learn. Grow.
        </h3>

        <p>
          Connect with seniors, find project teammates,
          discover internships, and get career guidance
          for your future.
        </p>

        <div className="buttons">
          <button className="primary">
            Get Started
          </button>

          <button className="secondary">
            Learn More
          </button>
        </div>

      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Students"
        />
      </div>

    </div>
  );
}

export default Home;