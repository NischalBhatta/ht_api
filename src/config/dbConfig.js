import mongoose from "mongoose";

const mongoURL = "mongodb://localhost:27017/online_ht";

export const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURL);
    conn && console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
