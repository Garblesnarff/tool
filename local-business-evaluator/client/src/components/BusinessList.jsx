/**
 * BusinessList.jsx - Component to display search results
 * 
 * Renders a list of businesses based on the global state.
 * Handles loading and error states.
 * 
 * Dependencies:
 * - React
 * - useAppContext (from AppContext.jsx)
 * - BusinessCard (to be created)
 * 
 * @author Your Name
 */

import React from 'react';
import { useAppContext } from '../context/AppContext';
import BusinessCard from './BusinessCard'; // Import the BusinessCard component

const BusinessList = () => {
  const { businesses, loading, error } = useAppContext();

  // Handle loading state
  if (loading) {
    return <div className="text-center py-8 text-gray-600">Loading businesses...</div>;
  }

  // Handle error state
  if (error) {
    return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  }

  // Handle no results found
  if (!businesses.length) {
    return (
      <div className="text-center py-8 text-gray-600">
        <p>No businesses found. Try a search.</p>
      </div>
    );
  }

  // Render the list of businesses
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {businesses.map(business => (
          <BusinessCard business={business} key={business._id} /> // Use BusinessCard component
        ))}
      </div>
    </div>
  );
};

export default BusinessList;
