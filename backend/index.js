const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("CampusConnect Backend Running");
});

// Register API
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  console.log("Registration Data:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);

  res.json({
    message: "Registration successful",
    user: {
      name,
      email
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});