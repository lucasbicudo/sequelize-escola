const database = require("../models");

class PersonController {
  static async getAllPeople(_, res) {
    try {
      const allPeople = await database.People.findAll();
      return res.status(200).json(allPeople);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getPersonById(req, res) {
    const { id } = req.params;
    try {
      const person = await database.People.findAll({
        where: { id: Number(id) },
      });
      return res.status(200).json(person);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
  static async createPerson(req, res) {
    const newPerson = req.body;
    try {
      const createPersonReturn = await database.People.create(newPerson);
      return res.send(200).json(newPerson);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updatePerson(req, res) {
    try {
      const { id } = req.params;
      const valueParams = req.body;
      const newValorPerson = await database.People.update(valueParams, {
        where: { id: id },
      });
      const personUpdated = await database.People.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(personUpdated);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deletePerson(req, res) {
    const { id } = req.params;
    try {
      const deleteOnePerson = await database.People.destroy({
        where: { id: Number(id) },
      });
      return res.status(200).json(`ID ${id} deletado com sucesso!`);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = PersonController;
