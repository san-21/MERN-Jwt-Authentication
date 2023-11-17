import nodemailer from "nodemailer";

export const sendEmail = async (email, resetToken, res) => {
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
    return res.status(200).json({
      message:
        "Check Your Email We have sent Password reset link to your mail!",
    });
  } catch (error) {
    console.log("Nodemailer not sent mail");
    throw new Error(error);
  }
};
