import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/user_route.js";
import messageRoute from "./route/message_route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 5001
const MONGODB_URI = process.env.MONGO_URI;

try {
    mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
} catch (error) {
    console.log(error);
}

app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`)
});