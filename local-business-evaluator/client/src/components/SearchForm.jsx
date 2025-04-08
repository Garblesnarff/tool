/**
 * SearchForm.jsx - Component for searching local businesses
 * 
 * Allows users to input city and state, then triggers an API search.
 * Updates global state with results, loading status, and errors.
 * 
 * Dependencies:
 * - React
 * - useAppContext (from AppContext.jsx)
 * - searchBusinesses (from api.js)
 * 
 * @author Your Name
 */

import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { searchBusinesses } from '../services/api';

const SearchForm = () => {
  // Get state setters from context
  const { setBusinesses, setLoading, setError, searchParams, setSearchParams } = useAppContext();
  // Local state for disabling button during search
  const [isSearching, setIsSearching] = useState(false);

  /**
   * Handles changes in form inputs.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  /**
   * Handles form submission.
   * @param {React.FormEvent<HTMLFormElement>} e - Form submit event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!searchParams.city || !searchParams.state) {
      setError('City and state are required');
      return;
    }

    try {
      setIsSearching(true);
      setLoading(true);
      setError(null); // Clear previous errors

      // Call the API service
      const data = await searchBusinesses(
        searchParams.city,
        searchParams.state,
        searchParams.types // Pass types if needed later
      );

      // Update global state with results
      setBusinesses(data.businesses || []);

    } catch (error) {
      // Update global error state
      setError(error.message || 'An error occurred during search');
      setBusinesses([]); // Clear previous results on error
    } finally {
      // Reset loading states
      setLoading(false);
      setIsSearching(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            name="city"
            value={searchParams.city}
            onChange={handleChange}
            placeholder="Enter city"
            required
            disabled={isSearching}
          />
        </div>
        <div className="mb-6"> {/* Increased bottom margin */}
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
            State
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="state"
            type="text"
            name="state"
            value={searchParams.state}
            onChange={handleChange}
            placeholder="Enter state (e.g., CA, NY)"
            required
            disabled={isSearching}
          />
        </div>
        <div className="flex items-center justify-start"> {/* Align button left */}
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSearching ? 'opacity-50 cursor-not-allowed' : ''}`}
            type="submit"
            disabled={isSearching}
          >
            {isSearching ? 'Searching...' : 'Search Businesses'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
