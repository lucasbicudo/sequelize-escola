const express = require("express");
const routes = require("./routes");
const app = express();
const port = 3000 || process.env;

routes(app);

app.listen(3000, () => {
  console.log(`Server Running on Port ${port}`);
});

module.exports = app;
