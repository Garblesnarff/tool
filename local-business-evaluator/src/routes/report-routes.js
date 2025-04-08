/**
 * report-routes.js - Reporting API routes
 * 
 * Defines endpoints for dashboard and reporting data.
 * 
 * Dependencies:
 * - express
 * - report-controller.js
 * 
 * @author Your Name
 */

const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report-controller.js');

// GET /api/reports/summary - summary counts for dashboard
router.get('/summary', reportController.getSummaryReport);

module.exports = router;
