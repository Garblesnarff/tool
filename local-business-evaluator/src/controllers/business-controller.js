/**
 * business-controller.js - Business API request handlers
 * 
 * Handles searching businesses, evaluating websites, and retrieving business data.
 * 
 * Dependencies:
 * - Business model
 * - GooglePlacesService
 * - WebsiteEvaluationService
 * 
 * @author Your Name
 */

const Business = require('../models/business.js');
const GooglePlacesService = require('../services/google-places-service.js');
const WebsiteEvaluationService = require('../services/website-evaluation-service.js');

/**
 * Searches for businesses in a city/state, evaluates websites, and stores results.
 * Handles pagination internally.
 * 
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 */
async function searchBusinesses(req, res) {
  try {
    const { city, state, types = ['business'] } = req.body;

    if (!city || !state) {
      return res.status(400).json({ message: 'City and state are required' });
    }

    const businesses = [];
    let nextPageToken = null;

    do {
      const results = await GooglePlacesService.searchBusinesses(city, state, types[0], nextPageToken);

      for (const place of results.results) {
        const details = await GooglePlacesService.getBusinessDetails(place.place_id);

        let business = await Business.findOne({ placeId: place.place_id });

        if (!business) {
          business = new Business({
            placeId: place.place_id,
            name: details.name,
            address: details.formatted_address,
            phoneNumber: details.formatted_phone_number,
            website: details.website,
            city,
            state
          });
        }

        const evaluation = await WebsiteEvaluationService.evaluateWebsite(details.website);
        business.evaluation = evaluation;

        // Categorize
        if (!evaluation.hasWebsite) {
          business.category = 'no_website';
        } else if (evaluation.lastUpdated && new Date() - new Date(evaluation.lastUpdated) > 5 * 365 * 24 * 60 * 60 * 1000) {
          business.category = 'outdated';
        } else if (evaluation.designQuality < 5 || evaluation.functionality < 5) {
          business.category = 'basic';
        } else {
          business.category = 'modern';
        }

        // Priority
        business.priority = calculatePriority(business);

        await business.save();
        businesses.push(business);
      }

      nextPageToken = results.next_page_token;

      if (nextPageToken) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    } while (nextPageToken);

    res.json({ businesses });
  } catch (error) {
    console.error('Error searching businesses:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}

/**
 * Calculates priority score based on business category.
 * @param {Business} business - Business document
 * @returns {number} Priority score (1-10)
 */
function calculatePriority(business) {
  let priority = 5;
  switch (business.category) {
    case 'no_website':
      priority += 3;
      break;
    case 'outdated':
      priority += 2;
      break;
    case 'basic':
      priority += 1;
      break;
    case 'modern':
      priority -= 2;
      break;
  }
  return Math.max(1, Math.min(10, priority));
}

/**
 * Retrieves businesses with optional filters and sorting.
 * 
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 */
async function getBusinesses(req, res) {
  try {
    const { city, state, category, sortBy = 'priority', sortOrder = 'desc' } = req.query;

    const query = {};
    if (city) query.city = city;
    if (state) query.state = state;
    if (category) query.category = category;

    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const businesses = await Business.find(query).sort(sortOptions);

    res.json({ businesses });
  } catch (error) {
    console.error('Error fetching businesses:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}

module.exports = {
  searchBusinesses,
  getBusinesses
};
