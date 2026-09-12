const Contact = require("../models/Contact");
const { sendContactNotificationAsync } = require("../services/emailService");

// PUBLIC: create a new enquiry.
// Flow: validate -> save to MongoDB -> respond immediately -> send
// email in the background (never awaited).
async function createContact(req, res, next) {
  try {
    const { name, email, phone, subject, service, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      service,
      message,
      status: "NEW",
    });

    // Respond right away — the enquiry is already safely stored.
    res.status(201).json({
      message: "Request submitted successfully. Our team will contact you soon.",
      id: contact._id,
    });

    // Fire-and-forget: does not block or affect the response above,
    // and a slow/failed email never deletes or affects the enquiry.
    sendContactNotificationAsync(contact, Contact);
  } catch (err) {
    next(err);
  }
}

// ADMIN: list enquiries with optional search/status/pagination.
async function listContacts(req, res, next) {
  try {
    const { status, search, page = 1, limit = 100 } = req.query;
    const query = {};

    if (status && status !== "ALL") {
      query.status = status;
    }
    if (search) {
      const regex = new RegExp(search, "i");
      query.$or = [{ name: regex }, { email: regex }, { phone: regex }, { service: regex }];
    }

    const enquiries = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    const total = await Contact.countDocuments(query);

    res.json({ enquiries, total, page: Number(page), limit: Number(limit) });
  } catch (err) {
    next(err);
  }
}

// ADMIN: get a single enquiry by id.
async function getContact(req, res, next) {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: "Enquiry not found." });
    res.json(contact);
  } catch (err) {
    next(err);
  }
}

// ADMIN: update status only.
async function updateContactStatus(req, res, next) {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!contact) return res.status(404).json({ message: "Enquiry not found." });
    res.json(contact);
  } catch (err) {
    next(err);
  }
}

// ADMIN: delete an enquiry.
async function deleteContact(req, res, next) {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: "Enquiry not found." });
    res.json({ message: "Enquiry deleted." });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createContact,
  listContacts,
  getContact,
  updateContactStatus,
  deleteContact,
};
