import mongoose from "mongoose";

// const mongoURL = "mongodb://localhost:27017/online_ht";
const mongoURL = process.env.MONGO_URL;

export const connectMongoDB = async () => {
  console.log(mongoURL);
  try {
    const conn = await mongoose.connect(mongoURL);
    conn && console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
