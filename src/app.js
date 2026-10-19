const dns = require("dns");
require("node:dns").setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express = require("express");
const connectDB = require("./db");
const registerRouter = require("./routes/Register");

const app = express();
app.use(express.json());

app.use("/api",registerRouter);


connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
  });