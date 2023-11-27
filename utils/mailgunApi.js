import formData from "form-data";
import Mailgun from "mailgun.js";
const mailgun = new Mailgun(formData);

export const mailgunApiEmail = async (email, resetToken) => {
  try {
    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY,
    });
    await mg.messages.create(process.env.DOMAIN, {
      from: "Developer <hello@melketsedekcheru.com>",
      to: ["cherumelketsedek@gmail.com"],
      subject: "Passsword Reset Link",
      text: "hre is alink to rest your password",
      html: `<p>Click <a href="${process.env.PASSWORD_RESET_URL}/${resetToken}">here</a> to reset your password </p>`,
    });
    console.log("email sent");
  } catch (error) {
    console.log("email not sent", error);
    throw new Error(error);
  }
};
