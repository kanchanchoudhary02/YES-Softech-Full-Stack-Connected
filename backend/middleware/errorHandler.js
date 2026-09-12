// Centralised error handler. Any controller can call next(err) and it
// will land here instead of leaking a stack trace to the client.
function notFound(req, res, next) {
  res.status(404).json({ message: `Route not found: ${req.originalUrl}` });
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error(err);
  const status = err.statusCode || 500;
  res.status(status).json({
    message: err.publicMessage || "Something went wrong on the server. Please try again.",
  });
}

module.exports = { notFound, errorHandler };
