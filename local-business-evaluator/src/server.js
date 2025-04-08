/**
 * server.js - Express server entry point
 * 
 * Configures and starts the Local Business Website Evaluator backend server.
 * 
 * Dependencies:
 * - express
 * - cors
 * - helmet
 * - dotenv
 * - mongoose (via connectDB)
 * - business-routes.js
 * - interaction-routes.js
 * 
 * @author Your Name
 */

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db.js');

const businessRoutes = require('./routes/business-routes.js');
const interactionRoutes = require('./routes/interaction-routes.js');
const reportRoutes = require('./routes/report-routes.js');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., screenshots)
app.use('/public', express.static('public'));

/
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., screenshots)
app.use('/public', express.static('public'));

// API routes
app.use('/api/businesses', businessRoutes);
app.use('/api/interactions', interactionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
