import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

//* routes import
import myUserRoute from "./routes/user.route";

//* IIFE for database connection
(async function () {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
    console.log("connected to database");
})();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

app.listen(8000, () => {
    console.log("server....");
});
