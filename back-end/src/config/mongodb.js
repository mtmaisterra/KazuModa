import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/c17-19-n-node-react';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Database connection established');
  } catch (error) {
    console.log(error.message);
  }
};
