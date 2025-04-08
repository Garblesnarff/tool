/**
 * business.js - Mongoose schema for local businesses
 * 
 * Defines the structure of business documents stored in MongoDB.
 * Includes contact info, website evaluation, category, and priority.
 * 
 * Dependencies:
 * - mongoose
 * 
 * @author Your Name
 */

const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({
  hasWebsite: Boolean,
  score: Number,
  lastUpdated: Date,
  mobileResponsive: Boolean,
  designQuality: Number,
  functionality: Number,
  seoScore: Number,
  screenshotPath: String,
  recommendedImprovements: [String],
  evaluatedAt: {
    type: Date,
    default: Date.now
  }
}, { _id: false }); // Embedded subdocument, no separate _id

const businessSchema = new mongoose.Schema({
  placeId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  address: String,
  phoneNumber: String,
  website: String,
  city: String,
  state: String,
  evaluation: evaluationSchema,
  category: {
    type: String,
    enum: ['no_website', 'outdated', 'basic', 'modern'],
    default: 'no_website'
  },
  priority: {
    type: Number,
    min: 1,
    max: 10,
    default: 5
  }
}, { timestamps: true }); // Adds createdAt and updatedAt

module.exports = mongoose.model('Business', businessSchema);
