import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">

      <div className="profile-card">

        <div className="profile-top">

          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="profile-image"
          />

          <h1>Kanishka Shree</h1>

          <p className="college">
            KGISL Institute of Technology, Coimbatore
          </p>

          <button>Edit Profile</button>

        </div>

        <div className="profile-details">

          <div className="detail-box">
            <h3>Department</h3>
            <p>Computer Science Engineering</p>
          </div>

          <div className="detail-box">
            <h3>Year</h3>
            <p>III Year</p>
          </div>

          <div className="detail-box">
            <h3>Skills</h3>
            <p>
              React, JavaScript, Python, Flask, SQL, HTML, CSS
            </p>
          </div>

          <div className="detail-box">
            <h3>Bio</h3>

            <p>
              Passionate Computer Science student interested in
              Full Stack Development, AI, Machine Learning,
              and building impactful projects.
            </p>
          </div>

          <div className="detail-box">
            <h3>GitHub</h3>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/username
            </a>
          </div>

          <div className="detail-box">
            <h3>LinkedIn</h3>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://linkedin.com/in/username
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;