/**
 * report-controller.js - Reporting API request handlers
 * 
 * Provides summary statistics for dashboards and reports.
 * 
 * Dependencies:
 * - Business model
 * - Interaction model
 * 
 * @author Your Name
 */

const Business = require('../models/business.js');
const Interaction = require('../models/interaction.js');

/**
 * Returns summary counts for dashboard charts.
 * 
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 */
async function getSummaryReport(req, res) {
  try {
    const [categoryCounts, priorityCounts, noWebsiteCount, interactionCounts] = await Promise.all([
      Business.aggregate([
        { $group: { _id: '$category', count: { $sum: 1 } } }
      ]),
      Business.aggregate([
        { $group: { _id: '$priority', count: { $sum: 1 } } }
      ]),
      Business.countDocuments({ 'evaluation.hasWebsite': false }),
      Interaction.aggregate([
        { $group: { _id: '$outcome', count: { $sum: 1 } } }
      ])
    ]);

    res.json({
      categories: categoryCounts,
      priorities: priorityCounts,
      noWebsiteCount,
      interactions: interactionCounts
    });
  } catch (error) {
    console.error('Error generating summary report:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}

module.exports = {
  getSummaryReport
};
