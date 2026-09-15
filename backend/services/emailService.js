const nodemailer = require("nodemailer");

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("❌ EMAIL_USER or EMAIL_PASS is missing");
    return null;
  }

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    family: 4,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter;
}



async function sendContactNotificationAsync(contactDoc, ContactModel) {
  const mailer = getTransporter();
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!mailer || !adminEmail) {
    console.error(
      "❌ Email not configured. Check EMAIL_USER, EMAIL_PASS and ADMIN_EMAIL."
    );
    return;
  }

  const {
    name,
    email,
    phone,
    subject,
    service,
    message,
    createdAt,
  } = contactDoc;

  const html = `
    <!DOCTYPE html>
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Enquiry from YES Softech Website</h2>

        <hr>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject || "-")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service || "-")}</p>

        <p>
          <strong>Message:</strong><br>
          ${escapeHtml(message || "-").replace(/\n/g, "<br>")}
        </p>

        <p>
          <strong>Submitted:</strong>
          ${new Date(createdAt || Date.now()).toLocaleString("en-IN")}
        </p>

        <hr>

        <p>
          This enquiry was submitted from the YES Softech website.
        </p>
      </body>
    </html>
  `;

  try {
    console.log("📧 Sending contact notification email...");

    const info = await mailer.sendMail({
      from: `"YES Softech Website" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New Enquiry: ${name} - ${
        service || subject || "General"
      }`,
      html,
      text: `
New Enquiry from YES Softech Website

Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Subject: ${subject || "-"}
Service: ${service || "-"}
Message: ${message || "-"}

Submitted: ${new Date(
        createdAt || Date.now()
      ).toLocaleString("en-IN")}
      `,
    });

    console.log("✅ EMAIL SENT SUCCESSFULLY");
    console.log("Message ID:", info.messageId);

    if (ContactModel && contactDoc._id) {
      await ContactModel.findByIdAndUpdate(contactDoc._id, {
        emailSent: true,
        emailError: null,
      });
    }
  } catch (err) {
    console.error("❌ EMAIL ERROR");
    console.error("Message:", err.message);
    console.error("Code:", err.code || "N/A");
    console.error("Response:", err.response || "N/A");
    console.error("Response Code:", err.responseCode || "N/A");

    if (ContactModel && contactDoc._id) {
      await ContactModel.findByIdAndUpdate(contactDoc._id, {
        emailSent: false,
        emailError: err.message,
      }).catch(() => {});
    }
  }
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

module.exports = {
  sendContactNotificationAsync,
};