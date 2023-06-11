const bodyParser = require("body-parser");
const people = require("./peopleRouter.js");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(people);
  app.get("/", (req, res) => {
    res.json({ message: "Aplicação em node JS com ORM Sequelize" });
  });
};
