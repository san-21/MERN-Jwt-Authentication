import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true, minLength: 5, maxLength: 100 },
  email: { type: String, required: true },
  password: { type: String, required: true, minLength: 7 },
});

const User = mongoose.model("User", UserSchema);
export default User;
