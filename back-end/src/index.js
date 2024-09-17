import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './config/mongodb.js';

dotenv.config();
connectDB();

const PORT = process.env.PORT || 4200;

app.listen(PORT);
console.log(`Server listen on port ${PORT}`);
