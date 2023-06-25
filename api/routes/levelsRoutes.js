const { Router } = require("express");
const LevelController = require("../controllers/LevelController.js");

const router = Router();

router.get("/levels", LevelController.getAllLevels);

module.exports = router;
