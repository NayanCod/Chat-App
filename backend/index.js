import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/user_route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001
const MONGODB_URI = process.env.MONGO_URI;

try {
    mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
    
} catch (error) {
    console.log(error);
    
}

app.use(express.json());
app.use("/user", userRoute)


app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`)
})