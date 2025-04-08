/**
 * google-places-service.js - Google Places & Geocoding API integration
 * 
 * Provides methods to:
 * - Geocode city/state to coordinates
 * - Search for businesses in a location
 * - Fetch detailed info for a business
 * 
 * Dependencies:
 * - axios
 * - dotenv (should be loaded in server.js)
 * 
 * @author Your Name
 */

const axios = require('axios');

class GooglePlacesService {
  constructor() {
    this.apiKey = process.env.GOOGLE_PLACES_API_KEY;
    this.baseUrl = 'https://maps.googleapis.com/maps/api/place';
  }

  /**
   * Converts a city and state to latitude and longitude.
   * @param {string} city - City name
   * @param {string} state - State abbreviation
   * @returns {Promise<{lat: number, lng: number}>}
   */
  async getGeocode(city, state) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(`${city}, ${state}`)}&key=${this.apiKey}`;
    try {
      const response = await axios.get(url);
      return response.data.results[0].geometry.location;
    } catch (error) {
      console.error('Error geocoding address:', error.message);
      throw error;
    }
  }

  /**
   * Searches for businesses near a city/state.
   * @param {string} city - City name
   * @param {string} state - State abbreviation
   * @param {string} type - Business type/category
   * @param {string|null} pageToken - Next page token for pagination
   * @returns {Promise<Object>} - Google Places API response
   */
  async searchBusinesses(city, state, type = 'business', pageToken = null) {
    const location = await this.getGeocode(city, state);

    let url = `${this.baseUrl}/nearbysearch/json?location=${location.lat},${location.lng}&radius=5000&type=${type}&key=${this.apiKey}`;
    if (pageToken) {
      url = `${this.baseUrl}/nearbysearch/json?pagetoken=${pageToken}&key=${this.apiKey}`;
    }

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error searching businesses:', error.message);
      throw error;
    }
  }

  /**
   * Fetches detailed info for a business by place ID.
   * @param {string} placeId - Google Place ID
   * @returns {Promise<Object>} - Business details
   */
  async getBusinessDetails(placeId) {
    const url = `${this.baseUrl}/details/json?place_id=${placeId}&fields=name,formatted_address,formatted_phone_number,website,url&key=${this.apiKey}`;
    try {
      const response = await axios.get(url);
      return response.data.result;
    } catch (error) {
      console.error('Error fetching business details:', error.message);
      throw error;
    }
  }
}

module.exports = new GooglePlacesService();
