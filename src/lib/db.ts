import { connect } from "mongoose";
import { MONGO_URI } from "../config";

export const connectDB = () => {
  connect(MONGO_URI, { autoIndex: false, autoCreate: false })
    .then(async () => {
      console.log("✅ Connected to MongoDB database");
    })
    .catch((err) => {
      console.error("❌ MongoDB Connection Error: ", err);
    });
};