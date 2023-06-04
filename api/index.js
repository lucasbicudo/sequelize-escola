const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000 || process.env;

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log(`Server Running on Port ${port}`);
});

module.exports = app;
