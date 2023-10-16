import nodemailer from "nodemailer";

const email = process.env.SECRET_EMAIL;
const pass = process.env.SECRET_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const emailOptions = {
  from: email,
  to: email,
};
