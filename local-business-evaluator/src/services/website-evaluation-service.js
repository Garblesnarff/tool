/**
 * website-evaluation-service.js - Website evaluation stub
 * 
 * Provides a placeholder method to evaluate a business website.
 * Returns dummy scores and recommendations.
 * To be enhanced in future phases with Lighthouse and Puppeteer.
 * 
 * Dependencies:
 * - axios
 * 
 * @author Your Name
 */

const axios = require('axios');

class WebsiteEvaluationService {
  /**
   * Evaluates a website URL.
   * For now, returns dummy data or "no website" if URL missing.
   * 
   * @param {string|null} url - Website URL
   * @returns {Promise<Object>} Evaluation result
   */
  async evaluateWebsite(url) {
    if (!url) {
      return {
        hasWebsite: false,
        score: 0,
        lastUpdated: null,
        mobileResponsive: false,
        designQuality: 0,
        functionality: 0,
        seoScore: 0,
        screenshotPath: null,
        recommendedImprovements: ['Create a website']
      };
    }

    try {
      // Check if website is accessible
      await axios.get(url, { timeout: 5000 });

      // Return dummy evaluation data
      return {
        hasWebsite: true,
        score: 50,
        lastUpdated: null,
        mobileResponsive: false,
        designQuality: 5,
        functionality: 5,
        seoScore: 50,
        screenshotPath: null,
        recommendedImprovements: ['Improve design', 'Make mobile-friendly', 'Enhance SEO']
      };
    } catch (error) {
      console.error(`Error accessing website ${url}:`, error.message);
      return {
        hasWebsite: true,
        score: 0,
        lastUpdated: null,
        mobileResponsive: false,
        designQuality: 0,
        functionality: 0,
        seoScore: 0,
        screenshotPath: null,
        recommendedImprovements: ['Fix website accessibility issues']
      };
    }
  }
}

module.exports = new WebsiteEvaluationService();
