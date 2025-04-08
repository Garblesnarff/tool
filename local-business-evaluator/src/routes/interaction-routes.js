/**
 * interaction-routes.js - Interaction API routes
 * 
 * Defines endpoints for creating and retrieving business interactions.
 * 
 * Dependencies:
 * - express
 * - interaction-controller.js
 * 
 * @author Your Name
 */

const express = require('express');
const router = express.Router();
const interactionController = require('../controllers/interaction-controller.js');

// Create a new interaction
router.post('/', interactionController.createInteraction);

// Get interactions (optionally filtered by businessId)
router.get('/', interactionController.getInteractions);

module.exports = router;
