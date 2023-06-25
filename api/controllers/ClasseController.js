const database = require("../models");

module.exports = class ClasseController {
  static async getAllClasses(_, res) {
    try {
      const allClasses = await database.Classes.findAll();
      return res.status(200).json(allClasses);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
};
