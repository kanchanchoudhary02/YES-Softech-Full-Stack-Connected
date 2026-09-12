const express = require("express");
const authMiddleware = require("../middleware/auth");
const { getStats } = require("../controllers/adminController");

const router = express.Router();

router.use(authMiddleware);
router.get("/stats", getStats);

module.exports = router;
