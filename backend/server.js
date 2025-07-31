const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve Angular static files
app.use(express.static(path.join(__dirname, "../dist")));

// ✅ API route
app.get("/api/courses", (req, res) => {
  res.json([
    { id: 1, title: "Akhilesh" }
  ]);
});

// ✅ For all other routes, serve Angular's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
