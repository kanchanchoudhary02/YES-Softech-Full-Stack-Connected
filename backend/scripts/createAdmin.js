/**
 * One-off script to create (or update) the admin account, using
 * ADMIN_EMAIL / ADMIN_PASSWORD from the .env file.
 *
 * Usage (from the server/ directory):
 *   node scripts/createAdmin.js
 */
require("dotenv").config();
const mongoose = require("mongoose");
const Admin = require("../models/Admin");

async function run() {
  const { MONGO_URI, ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_NAME } = process.env;

  if (!MONGO_URI || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error("MONGO_URI, ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env");
    process.exit(1);
  }

  await mongoose.connect(MONGO_URI);

  let admin = await Admin.findOne({ email: ADMIN_EMAIL.toLowerCase() });

  if (admin) {
    admin.password = ADMIN_PASSWORD; // will be re-hashed by the pre-save hook
    admin.name = ADMIN_NAME || admin.name;
    await admin.save();
    console.log(`Updated existing admin: ${admin.email}`);
  } else {
    admin = await Admin.create({
      name: ADMIN_NAME || "YES Softech Admin",
      email: ADMIN_EMAIL.toLowerCase(),
      password: ADMIN_PASSWORD,
      role: "admin",
    });
    console.log(`Created admin: ${admin.email}`);
  }

  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
