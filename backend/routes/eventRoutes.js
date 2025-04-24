const express = require("express");
const { getEvent } = require("../controllers/eventController")

const router = express.Router();
router.get("/event/:id", getEvent);

module.exports = router;