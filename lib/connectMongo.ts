import mongoose from "mongoose";

const connectMongo = async () => {
  console.log(process.env.MONGO_URI);
  return mongoose.connect(process.env.MONGO_URI as string);
};

export default connectMongo;
