import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();
export const sendEmail = async (email, resetToken) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST_ADDRESS,
      port: process.env.EMAIL_PORT || 465,
      auth: {
        user: process.env.MAIL_SERVICE_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "san software support <suppoprt@sansoftware.com>",
      to: email,
      subject: "Passsword Reset Link",
      html: `<p>Click <a href="${process.env.PASSWORD_RESET_URL}/${resetToken}">here</a> to reset your password </p>`,
    };
    await transporter.sendMail(mailOptions);
    console.log("Nodemailer sent mail successfully");
  } catch (error) {
    console.log("Nodemailer not sent mail");
    return error;
  }
};
