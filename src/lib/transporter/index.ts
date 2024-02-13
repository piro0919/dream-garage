import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  auth: {
    pass: process.env.NODEMAILER_AUTH_PASS,
    user: process.env.NODEMAILER_AUTH_USER,
  },
  port: 465,
  secure: true,
  service: "gmail",
});

export default transporter;
