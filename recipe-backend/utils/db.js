const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const MongoDB_URI = process.env.MONGO_URL; // Should be defined in .env file

const connectDB = async () => {
  try {
    if (!MongoDB_URI) throw new Error('MongoDB URI is undefined');
    await mongoose.connect(MongoDB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
