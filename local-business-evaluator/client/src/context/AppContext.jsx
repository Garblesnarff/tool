/**
 * AppContext.jsx - Global state management using React Context
 * 
 * Provides state for businesses, search parameters, loading, and errors.
 * 
 * Dependencies:
 * - React
 * 
 * @author Your Name
 */

import React, { createContext, useContext, useState } from 'react';

// Create the context
const AppContext = createContext();

/**
 * Context Provider component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const AppProvider = ({ children }) => {
  const [businesses, setBusinesses] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({
    city: '',
    state: '',
    types: ['business']
  });

  // Value provided by the context
  const value = {
    businesses,
    setBusinesses,
    selectedBusiness,
    setSelectedBusiness,
    loading,
    setLoading,
    error,
    setError,
    searchParams,
    setSearchParams
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

/**
 * Custom hook to use the AppContext
 * @returns {Object} Context value
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
