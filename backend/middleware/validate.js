const { validationResult } = require("express-validator");

// Runs after an array of express-validator checks; returns a clean
// 400 response instead of letting invalid data reach a controller.
function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Please check the submitted information.",
      errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    });
  }
  next();
}

module.exports = validate;
