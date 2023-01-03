const express = require("express");
const rankController = require("../controllers/rankControllers");

const router = express.Router();

router.route("/rankCalc").post(rankController.rankCalc);

module.exports = router;
