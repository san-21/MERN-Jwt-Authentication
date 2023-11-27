// Using Nodemailer https://nodemailer.com/
import nodemailer from "nodemailer";

export const sendEmail = async (email, resetToken) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.MAILGUN_HOST,
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // send mail with defined transport object
  try {
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: "cherumelketsedek@gmail.com",
      subject: "Passsword Reset Link",
      text: "hre is alink to rest your password",
      html: `<p>Click <a href="${process.env.PASSWORD_RESET_URL}/${resetToken}">here</a> to reset your password </p>`,
    });
    console.log("email sent");
  } catch (error) {
    console.log("email not sent");
    throw new error();
  }
};
