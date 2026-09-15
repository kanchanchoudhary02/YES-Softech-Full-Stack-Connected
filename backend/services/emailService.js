
const { Resend } = require("resend");

let resendClient = null;

function getResendClient() {
  if (resendClient) return resendClient;

  if (!process.env.RESEND_API_KEY) {
    console.error("❌ RESEND_API_KEY is missing");
    return null;
  }

  resendClient = new Resend(process.env.RESEND_API_KEY);

  return resendClient;
}

async function sendContactNotificationAsync(contactDoc, ContactModel) {
  const resend = getResendClient();
  const adminEmail = process.env.ADMIN_EMAIL;
  const fromEmail = process.env.EMAIL_FROM;

  if (!resend || !adminEmail || !fromEmail) {
    console.error(
      "❌ Email not configured. Check RESEND_API_KEY, ADMIN_EMAIL and EMAIL_FROM."
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

  const submittedAt = new Date(
    createdAt || Date.now()
  ).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "-");
  const safeSubject = escapeHtml(subject || "-");
  const safeService = escapeHtml(service || "-");
  const safeMessage = escapeHtml(message || "-").replace(/\n/g, "<br>");

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>New YES Softech Enquiry</title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background: #f5f5f5;
          font-family: Arial, Helvetica, sans-serif;
          color: #222;
        "
      >
        <div
          style="
            max-width: 680px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #e5e5e5;
          "
        >

          <div
            style="
              background: #111111;
              padding: 24px;
              text-align: center;
            "
          >
            <h1
              style="
                margin: 0;
                color: #d4af37;
                font-size: 24px;
              "
            >
              YES Softech
            </h1>

            <p
              style="
                margin: 8px 0 0;
                color: #ffffff;
                font-size: 14px;
              "
            >
              New Website Enquiry
            </p>
          </div>

          <div style="padding: 28px;">

            <h2
              style="
                margin-top: 0;
                font-size: 20px;
                color: #222;
              "
            >
              New Enquiry Received
            </h2>

            <table
              width="100%"
              cellpadding="8"
              cellspacing="0"
              style="border-collapse: collapse;"
            >
              <tr>
                <td style="font-weight: bold; width: 130px;">
                  Name
                </td>
                <td>${safeName}</td>
              </tr>

              <tr>
                <td style="font-weight: bold;">
                  Email
                </td>
                <td>
                  <a
                    href="mailto:${safeEmail}"
                    style="color: #b08d20;"
                  >
                    ${safeEmail}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="font-weight: bold;">
                  Phone
                </td>
                <td>${safePhone}</td>
              </tr>

              <tr>
                <td style="font-weight: bold;">
                  Subject
                </td>
                <td>${safeSubject}</td>
              </tr>

              <tr>
                <td style="font-weight: bold;">
                  Service
                </td>
                <td>${safeService}</td>
              </tr>

              <tr>
                <td style="font-weight: bold;">
                  Submitted
                </td>
                <td>${submittedAt}</td>
              </tr>
            </table>

            <div
              style="
                margin-top: 24px;
                padding: 18px;
                background: #f8f8f8;
                border-left: 4px solid #d4af37;
                border-radius: 6px;
              "
            >
              <p
                style="
                  margin: 0 0 8px;
                  font-weight: bold;
                "
              >
                Message
              </p>

              <p style="margin: 0; line-height: 1.6;">
                ${safeMessage}
              </p>
            </div>

            <div
              style="
                margin-top: 25px;
                padding-top: 18px;
                border-top: 1px solid #eeeeee;
                font-size: 13px;
                color: #777;
              "
            >
              This enquiry was submitted from the
              <strong>YES Softech website</strong>.
            </div>

          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
New Enquiry from YES Softech Website

Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Subject: ${subject || "-"}
Service: ${service || "-"}
Message: ${message || "-"}

Submitted: ${submittedAt}
  `;

  try {
    console.log("📧 Sending contact notification email via Resend...");

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [adminEmail],
      replyTo: email,
      subject: `New Enquiry: ${name} - ${
        service || subject || "General"
      }`,
      html,
      text,
    });

    if (error) {
      throw new Error(
        error.message || JSON.stringify(error)
      );
    }

    console.log("✅ EMAIL SENT SUCCESSFULLY VIA RESEND");
    console.log("Resend Email ID:", data?.id || "N/A");

    if (ContactModel && contactDoc._id) {
      await ContactModel.findByIdAndUpdate(contactDoc._id, {
        emailSent: true,
        emailError: null,
      });
    }

  } catch (err) {
    console.error("❌ RESEND EMAIL ERROR");
    console.error("Message:", err.message);

    if (err.statusCode) {
      console.error("Status Code:", err.statusCode);
    }

    if (ContactModel && contactDoc._id) {
      await ContactModel.findByIdAndUpdate(
        contactDoc._id,
        {
          emailSent: false,
          emailError: err.message,
        }
      ).catch(() => {});
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
