const { Router } = require("express");
const ClasseController = require("../controllers/ClasseController.js");

const router = Router();

router.get("/Classes", ClasseController.getAllClasses);

module.exports = router;
