/**
 * interaction-controller.js - Interaction API request handlers
 * 
 * Handles creating and retrieving interaction records for businesses.
 * 
 * Dependencies:
 * - Interaction model
 * - Business model
 * 
 * @author Your Name
 */

const Interaction = require('../models/interaction.js');
const Business = require('../models/business.js');

/**
 * Creates a new interaction record for a business.
 * 
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 */
async function createInteraction(req, res) {
  try {
    const { businessId, type, notes, outcome } = req.body;

    const business = await Business.findById(businessId);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }

    const interaction = new Interaction({
      businessId,
      type,
      notes,
      outcome
    });

    await interaction.save();

    res.status(201).json({ interaction });
  } catch (error) {
    console.error('Error creating interaction:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}

/**
 * Retrieves interactions, optionally filtered by businessId.
 * 
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 */
async function getInteractions(req, res) {
  try {
    const { businessId } = req.query;

    const query = {};
    if (businessId) query.businessId = businessId;

    const interactions = await Interaction.find(query).sort({ createdAt: -1 });

    res.json({ interactions });
  } catch (error) {
    console.error('Error fetching interactions:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}

module.exports = {
  createInteraction,
  getInteractions
};
