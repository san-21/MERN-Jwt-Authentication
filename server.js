dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

import { mongoConnect } from "./config/dbConnect.js";
import dotenv from "dotenv";
import { allowedUrl } from "./config/corsSetting.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

mongoConnect();

//Cross Origin Resource Policy
app.use(cors(allowedUrl));
//middleware

app.use(bodyParser.json());
app.use(cookieParser());

//Routes

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Express Server Running on Port ${PORT}`);
});
