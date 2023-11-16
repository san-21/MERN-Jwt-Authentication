import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

// functions

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email: email }).exec();

  if (!user) {
    return res.status(404).json({ message: "Email not found or Registered" });
  }
  const expire = user.resetTokenExpiry;
  //   check if email expire time save in db and expre date have more time

  if (expire && expire > Date.now()) {
    return res
      .status(404)
      .json({ message: "We Already Sent password reset link.check your mail" });
  }

  // Generate token
  const resetToken = jwt.sign(
    {
      _id: user._id,
    },
    process.env.RESET_TOKEN_SECRET_KEY,
    { expiresIn: process.env.RESET_TOKEN_EXPIRATION }
  );
  user.resetToken = resetToken;
  user.resetTokenExpiry = Date.now() + 3600000;
  await user.save();

  //   SEND EMAIL
  try {
    await sendEmail(email, resetToken);
    res.status(200).json({
      message:
        "Check Your Email We have sent Password reset link to your mail!",
    });
    console.log("email sent successfully");
  } catch (error) {
    user.resetToken = null;
    user.resetTokenSecret = null;
    await user.save();
    res.status(400).json({ message: "Email is not sent. Try Again" });
  }
};

export const resetPassword = async (req, res) => {
  const { token, password } = req.body;

  try {
    // verify resetToken is VAlid or not

    jwt.verify(
      token,
      process.env.RESET_TOKEN_SECRET_KEY,
      async (err, decoded) => {
        if (err) {
          return res.status(404).json({ message: "Invalid or Expired token" });
        }

        // check user and email expire time
        const user = await User.findOne({
          _id: decoded._id,
          resetToken: token,
        });
        if (!user || user.resetTokenExpiry < Date.now()) {
          return res.status(400).json({ message: "Email Link Expired." });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user.password = hashedPassword;

        await user.save();
        res.status(200).json({ message: "Password reset Successfull" });
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
