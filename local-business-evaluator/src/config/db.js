/**
 * db.js - MongoDB connection configuration
 * 
 * Establishes a connection to MongoDB using Mongoose.
 * Handles connection success and error events.
 * 
 * Dependencies:
 * - mongoose
 * - dotenv (should be loaded in server.js)
 * 
 * @author Your Name
 */

const mongoose = require('mongoose');

/**
 * Connects to MongoDB using the URI from environment variables.
 * Retries on failure.
 */
async function connectDB() {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    console.error('Error: MONGODB_URI not set in environment variables.');
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
