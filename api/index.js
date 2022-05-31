import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// files import
import authRoute from "./routes/auth.route.js";
import hotelsRoute from "./routes/hotels.route.js";
import usersRoute from "./routes/users.route.js";
import roomsRoute from "./routes/rooms.route.js";

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
app.use(cookieParser());
app.use(express.json()); // for parsing application/json

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
// express routes
app.get("/", (req, res) => {
  res.send("Hello, this is a first request");
});

app.listen(8080, () => {
  connect();
  console.log("connected to backend");
});
