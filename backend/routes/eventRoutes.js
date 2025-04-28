const express = require("express");
const router = express.Router();
const { getLastThreeEvents } = require("../controllers/eventController")

router.get("/events", getLastThreeEvents);

module.exports = router;