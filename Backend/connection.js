// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const MONGODB_URL = process.env.MONGODB_URL;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected successfully');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//   }
// };

// export default connectDB;
// connection.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 8080;

// Connect to MongoDB using the MONGODB_URL
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Export the connection object
export const conn = mongoose.connection;

// Example export of PORT
export const port = PORT;
