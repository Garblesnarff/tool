/**
 * App.js - Main React app component
 * 
 * Displays navigation and main UI placeholders for the Local Business Website Evaluator.
 * 
 * Dependencies:
 * - React
 * - Tailwind CSS
 * 
 * @author Your Name
 */

import React from 'react';
import './index.css';
import SearchForm from './components/SearchForm'; // Import the SearchForm component
import BusinessList from './components/BusinessList'; // Import the BusinessList component

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Local Business Website Evaluator</h1>
      </nav>

      <main className="p-4 max-w-6xl mx-auto">
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Search Businesses</h2>
          <SearchForm /> {/* Use the SearchForm component */}
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Business Results</h2>
          <BusinessList /> {/* Use the BusinessList component */}
        </section>
      </main>
    </div>
  );
}

export default App;
