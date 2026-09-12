const express = require("express");
const { body, param } = require("express-validator");
const {
  createContact,
  listContacts,
  getContact,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contactController");
const validate = require("../middleware/validate");
const authMiddleware = require("../middleware/auth");
const { contactLimiter } = require("../middleware/rateLimiters");
const { STATUS_VALUES } = require("../models/Contact");

const router = express.Router();

// PUBLIC — anyone can submit an enquiry.
router.post(
  "/",
  contactLimiter,
  [
    body("name").trim().notEmpty().withMessage("Name is required.").isLength({ max: 120 }),
    body("email").isEmail().withMessage("A valid email is required.").normalizeEmail(),
    body("phone").optional({ checkFalsy: true }).trim().isLength({ max: 30 }),
    body("subject").optional({ checkFalsy: true }).trim().isLength({ max: 160 }),
    body("service").optional({ checkFalsy: true }).trim().isLength({ max: 160 }),
    body("message").trim().notEmpty().withMessage("Message is required.").isLength({ max: 4000 }),
  ],
  validate,
  createContact
);

// ADMIN ONLY from here on.
router.use(authMiddleware);

router.get("/", listContacts);
router.get("/:id", param("id").isMongoId(), validate, getContact);
router.patch(
  "/:id/status",
  [param("id").isMongoId(), body("status").isIn(STATUS_VALUES).withMessage("Invalid status value.")],
  validate,
  updateContactStatus
);
router.delete("/:id", param("id").isMongoId(), validate, deleteContact);

module.exports = router;
