const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const sendGrid = require("@sendGrid/mail");
const path = require("path");
require("dotenv").config();

const app = express();

const PORT = 3002;

app.use(bodyparser.json());

app.use(cors());
app.use(express.static("client/build"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.get("/api", (req, res, next) => {
  res.send("API running");
});

app.post("/api/email", (req, res, next) => {
  sendGrid.setApiKey(process.env.API_KEY);
  const msg = {
    to: "vizhar1952@gmail.com",
    from: req.body.email,
    subject: "Website Contact",
    text: req.body.message,
  };
  sendGrid
    .send(msg)
    .then((result) => {
      console.log(result);
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("error:", err);
      res.status(401).json({
        success: false,
      });
    });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, function () {
  console.log(`running in port ${PORT}`);
});
