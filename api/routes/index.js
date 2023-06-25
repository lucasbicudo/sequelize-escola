const bodyParser = require("body-parser");
const people = require("./peopleRouter.js");
const levels = require("./levelsRoutes.js");
const classes = require("./classesRoutes.js");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(people, levels, classes);
  app.get("/", (_, res) => {
    res.json({ message: "Aplicação em node JS com ORM Sequelize" });
  });
};
