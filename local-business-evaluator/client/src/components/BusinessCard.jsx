/**
 * BusinessCard.jsx - Component to display summary of a single business
 * 
 * Renders key details like name, address, category, priority, and basic evaluation.
 * 
 * Dependencies:
 * - React
 * 
 * @param {Object} props - Component props
 * @param {Object} props.business - Business data object
 * @returns {React.ReactElement}
 * 
 * @author Your Name
 */

import React from 'react';

const BusinessCard = ({ business }) => {
  // Helper function to get category badge styling
  const getCategoryBadge = () => {
    switch (business.category) {
      case 'no_website':
        return <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">No Website</span>;
      case 'outdated':
        return <span className="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Outdated</span>;
      case 'basic':
        return <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Basic</span>;
      case 'modern':
        return <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">Modern</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="p-4">
        {/* Header: Name, Priority, Category */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800 truncate mr-2" title={business.name}>{business.name}</h3>
          <div className="flex-shrink-0 flex items-center space-x-2">
            <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
              P: {business.priority}
            </span>
            {getCategoryBadge()}
          </div>
        </div>

        {/* Address */}
        <p className="text-sm text-gray-600 mt-1 truncate" title={business.address}>{business.address}</p>

        {/* Phone */}
        {business.phoneNumber && (
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-semibold">Phone:</span> {business.phoneNumber}
          </p>
        )}

        {/* Website */}
        <div className="mt-2">
          {business.website ? (
            <a
              href={business.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline block truncate"
              title={business.website}
            >
              {business.website}
            </a>
          ) : (
            <p className="text-sm text-red-500 italic">No website available</p>
          )}
        </div>

        {/* Evaluation Summary (if available) */}
        {business.evaluation && business.evaluation.hasWebsite && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <h4 className="font-semibold text-xs text-gray-700 mb-1">Evaluation</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <span>Perf: {business.evaluation.score?.toFixed(0) ?? 'N/A'}%</span>
              <span>Design: {business.evaluation.designQuality ?? 'N/A'}/10</span>
              <span>Func: {business.evaluation.functionality ?? 'N/A'}/10</span>
              <span>SEO: {business.evaluation.seoScore?.toFixed(0) ?? 'N/A'}%</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessCard;
