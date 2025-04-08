/**
 * business-routes.js - Business API routes
 * 
 * Defines endpoints for searching and retrieving businesses.
 * 
 * Dependencies:
 * - express
 * - business-controller.js
 * 
 * @author Your Name
 */

const express = require('express');
const router = express.Router();
const businessController = require('../controllers/business-controller.js');

// Search businesses and evaluate websites
router.post('/search', businessController.searchBusinesses);

// Get businesses with filters/sorting
router.get('/', businessController.getBusinesses);

module.exports = router;
