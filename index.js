require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/users.route");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

// route not found error
app.use((req, res, next) => {
  res.status(404).json({ message: "route not found" });
});

// server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: "something broke" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
