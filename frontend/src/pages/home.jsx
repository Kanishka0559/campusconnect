import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <h1>CampusConnect</h1>

        <h2>Connect | Learn | Grow</h2>

        <button>Get Started</button>

      </section>

      {/* Features Section */}

      <section className="features">

        <h2>Why CampusConnect?</h2>

        <div className="feature-box">

          <div className="card">
            <h3>✓ Find Mentors</h3>
            <p>Connect with experienced seniors for guidance.</p>
          </div>

          <div className="card">
            <h3>✓ Find Project Teams</h3>
            <p>Build amazing projects with like-minded students.</p>
          </div>

          <div className="card">
            <h3>✓ Discover Internships</h3>
            <p>Explore internship opportunities shared by students.</p>
          </div>

        </div>

      </section>

      {/* Steps Section */}

      <section className="steps">

        <h2>How It Works</h2>

        <div className="step-container">

          <div className="step">
            <span>1</span>
            <h3>Create Profile</h3>
          </div>

          <div className="step">
            <span>2</span>
            <h3>Connect with Seniors</h3>
          </div>

          <div className="step">
            <span>3</span>
            <h3>Join Teams</h3>
          </div>

          <div className="step">
            <span>4</span>
            <h3>Get Opportunities</h3>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;