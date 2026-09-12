const { getChatReply } = require("../services/aiService");
const ChatLog = require("../models/ChatLog");

async function chat(req, res, next) {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ message: "Please provide a message." });
    }

    const reply = await getChatReply(message.trim(), history);

    res.json({ reply });

    // Best-effort logging, never blocks the response and never fails the request.
    ChatLog.create({ message: message.trim(), reply, ip: req.ip }).catch(() => {});
  } catch (err) {
    next(err);
  }
}

module.exports = { chat };
