const database = require("../models");

module.exports = class LevelController {
  static async getAllLevels(_, res) {
    try {
      const allLevel = await database.Levels.findAll();
      return res.status(200).json(allLevel);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
};
