/**
 * api.js - Frontend API service layer
 * 
 * Provides functions to interact with the backend API endpoints.
 * 
 * Dependencies:
 * - axios
 * 
 * @author Your Name
 */

import axios from 'axios';

// Get API base URL from environment variable or default
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Searches for businesses by city and state.
 * @param {string} city - City name
 * @param {string} state - State abbreviation
 * @param {string[]} [types=['business']] - Optional business types
 * @returns {Promise<Object>} - API response data (e.g., { businesses: [...] })
 */
export const searchBusinesses = async (city, state, types = ['business']) => {
  try {
    const response = await api.post('/businesses/search', { city, state, types });
    return response.data;
  } catch (error) {
    console.error('Error searching businesses:', error);
    throw error.response?.data || error; // Throw backend error message if available
  }
};

/**
 * Retrieves businesses with optional filters.
 * @param {Object} [filters={}] - Optional filters (city, state, category, sortBy, sortOrder)
 * @returns {Promise<Object>} - API response data (e.g., { businesses: [...] })
 */
export const getBusinesses = async (filters = {}) => {
  try {
    const response = await api.get('/businesses', { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching businesses:', error);
    throw error.response?.data || error;
  }
};

/**
 * Retrieves a single business by its ID.
 * @param {string} id - Business ID
 * @returns {Promise<Object>} - API response data (e.g., { business: {...} })
 */
export const getBusinessById = async (id) => {
  try {
    // Note: Backend needs to implement this endpoint
    const response = await api.get(`/businesses/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching business ${id}:`, error);
    throw error.response?.data || error;
  }
};

/**
 * Creates a new interaction record.
 * @param {Object} interactionData - Interaction details (businessId, type, notes, outcome)
 * @returns {Promise<Object>} - API response data (e.g., { interaction: {...} })
 */
export const createInteraction = async (interactionData) => {
  try {
    const response = await api.post('/interactions', interactionData);
    return response.data;
  } catch (error) {
    console.error('Error creating interaction:', error);
    throw error.response?.data || error;
  }
};

/**
 * Retrieves interactions, optionally filtered by business ID.
 * @param {string} [businessId] - Optional business ID to filter by
 * @returns {Promise<Object>} - API response data (e.g., { interactions: [...] })
 */
export const getInteractions = async (businessId) => {
  try {
    const response = await api.get('/interactions', { params: { businessId } });
    return response.data;
  } catch (error) {
    console.error('Error fetching interactions:', error);
    throw error.response?.data || error;
  }
};

/**
 * Retrieves the summary report data for the dashboard.
 * @returns {Promise<Object>} - API response data (e.g., { categories: [...], priorities: [...] })
 */
export const getSummaryReport = async () => {
  try {
    const response = await api.get('/reports/summary');
    return response.data;
  } catch (error) {
    console.error('Error fetching summary report:', error);
    throw error.response?.data || error;
  }
};

export default api; // Export the configured Axios instance if needed elsewhere
