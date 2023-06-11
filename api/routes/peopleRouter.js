const { Router } = require("express");
const PersonController = require("../controllers/PersonController.js");

const router = Router();

router.get("/People", PersonController.getAllPeople);
router.get("/People/:id", PersonController.getPersonById);
router.post("/People", PersonController.createPerson);
router.put("/People/:id", PersonController.updatePerson);
router.delete("/People/:id", PersonController.deletePerson);

module.exports = router;
