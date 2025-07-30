const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/courses", (req, res) => {
  res.json([
    { id: 1, title: "Akhilesh" }
  ]);
});

app.listen(5000, () => console.log("🔥 Backend running on port 5000"));
