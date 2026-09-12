const express = require("express");
const { body } = require("express-validator");
const { chat } = require("../controllers/chatController");
const validate = require("../middleware/validate");
const { chatLimiter } = require("../middleware/rateLimiters");

const router = express.Router();

router.post(
  "/",
  chatLimiter,
  [body("message").trim().notEmpty().withMessage("Message is required.").isLength({ max: 2000 })],
  validate,
  chat
);

module.exports = router;
