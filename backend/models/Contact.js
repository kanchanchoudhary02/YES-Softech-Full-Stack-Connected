const mongoose = require("mongoose");

const STATUS_VALUES = ["NEW", "CONTACTED", "IN_PROGRESS", "RESOLVED"];

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    subject: { type: String, trim: true },
    service: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    status: { type: String, enum: STATUS_VALUES, default: "NEW" },
    emailSent: { type: Boolean, default: false },
    emailError: { type: String },
  },
  { timestamps: true }
);

contactSchema.index({ name: "text", email: "text", phone: "text", service: "text" });

module.exports = mongoose.model("Contact", contactSchema);
module.exports.STATUS_VALUES = STATUS_VALUES;
