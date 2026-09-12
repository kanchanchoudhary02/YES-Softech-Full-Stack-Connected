const mongoose = require("mongoose");

// Optional lightweight log of chatbot conversations, useful for the
// admin to review what visitors are asking about. Not required for
// the chatbot to function.
const chatLogSchema = new mongoose.Schema(
  {
    message: { type: String, required: true },
    reply: { type: String },
    ip: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ChatLog", chatLogSchema);
