const express = require("express");
const dotenv = require("dotenv");

// To use the dotenv variable
// we need to load the config file

dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on PORT ${PORT}`
  )
);
