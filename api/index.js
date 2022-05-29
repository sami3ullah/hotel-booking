import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// files import
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
dotenv.config();

// connection with the db
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// middlewares
app.use("/auth", authRoute);

// express routes
app.get("/", (req, res) => {
  res.send("Hello, this is a first request");
});

app.listen(8080, () => {
  connect();
  console.log("connected to backend");
});
