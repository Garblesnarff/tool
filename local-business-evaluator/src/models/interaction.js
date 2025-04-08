/**
 * interaction.js - Mongoose schema for business interactions
 * 
 * Defines the structure of interaction documents stored in MongoDB.
 * Tracks calls, emails, visits, proposals, and follow-ups with businesses.
 * 
 * Dependencies:
 * - mongoose
 * 
 * @author Your Name
 */

const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true
  },
  type: {
    type: String,
    enum: ['email', 'call', 'visit', 'proposal', 'followup'],
    required: true
  },
  notes: String,
  outcome: {
    type: String,
    enum: ['interested', 'not_interested', 'followup_later', 'closed_deal', 'no_response'],
    default: 'no_response'
  }
}, { timestamps: true }); // Adds createdAt and updatedAt

module.exports = mongoose.model('Interaction', interactionSchema);
