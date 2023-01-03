const express = require("express");
const wordsController = require("../controllers/wordsController");

const router = express.Router();

router.route("/wordsList").get(wordsController.wordsList);

module.exports = router;
