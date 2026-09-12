const rateLimit = require("express-rate-limit");

// General API limiter — generous, just to blunt abuse/scraping.
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many requests. Please try again shortly." },
});

// Stricter limiter for the public contact form to prevent spam floods.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many enquiries submitted. Please try again later." },
});

// Chatbot limiter — protects the AI API key/quota from abuse.
const chatLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "You're sending messages too quickly. Please slow down." },
});

// Login limiter — slows down brute-force attempts against admin auth.
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many login attempts. Please try again later." },
});

module.exports = { apiLimiter, contactLimiter, chatLimiter, loginLimiter };
