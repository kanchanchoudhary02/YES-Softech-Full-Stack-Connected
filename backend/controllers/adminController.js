const Contact = require("../models/Contact");

async function getStats(req, res, next) {
  try {
    const [total, newCount, contacted, inProgress, resolved] = await Promise.all([
      Contact.countDocuments({}),
      Contact.countDocuments({ status: "NEW" }),
      Contact.countDocuments({ status: "CONTACTED" }),
      Contact.countDocuments({ status: "IN_PROGRESS" }),
      Contact.countDocuments({ status: "RESOLVED" }),
    ]);

    res.json({ total, new: newCount, contacted, inProgress, resolved });
  } catch (err) {
    next(err);
  }
}

module.exports = { getStats };
