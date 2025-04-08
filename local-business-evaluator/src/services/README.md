# Services Directory

This directory contains **service modules** responsible for integrating with external APIs and performing business logic beyond simple data storage.

---

## Purpose

- Encapsulate API calls (Google Places, Geocoding)
- Handle website evaluation logic (stub initially, enhanced later)
- Provide reusable, testable business logic components

---

## Key Services

- **google-places-service.js**: 
  - Search for businesses in a location
  - Fetch business details
  - Geocode city/state to coordinates
- **website-evaluation-service.js**:
  - Evaluate business websites
  - Initially a stub with dummy data
  - Later integrates Lighthouse and Puppeteer

---

## Interaction with Other Components

- **Controllers** call these services to fetch or process data
- **Models** are updated with data returned by services
- **Routes** trigger controller actions that use services

---

## Usage Example

```javascript
const googlePlacesService = require('./google-places-service.js');

const coords = await googlePlacesService.getGeocode('San Francisco', 'CA');
const results = await googlePlacesService.searchBusinesses('San Francisco', 'CA', 'restaurant');
```

---

## Notes

- Keep each service focused and under 200 lines
- Use helper functions for complex logic
- Document all methods with JSDoc
- Add context comments explaining API usage and design decisions
