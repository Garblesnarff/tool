# Controllers Directory

This directory contains **Express controller modules** that handle HTTP request logic for the Local Business Website Evaluator backend.

---

## Purpose

- Process incoming API requests
- Validate request data
- Call services to fetch or process data
- Interact with MongoDB models
- Send appropriate HTTP responses

---

## Key Controllers

- **business-controller.js**:
  - Search businesses via Google Places
  - Evaluate websites
  - Store and retrieve business data
- **interaction-controller.js**:
  - Create new interaction records
  - List interactions for businesses

---

## Interaction with Other Components

- **Routes** invoke controller methods on API requests
- **Services** are called by controllers to perform business logic
- **Models** are used by controllers to read/write database data

---

## Usage Example

```javascript
const businessController = require('./business-controller.js');

app.post('/api/businesses/search', businessController.searchBusinesses);
app.get('/api/businesses', businessController.getBusinesses);
```

---

## Notes

- Keep controller files under 200 lines
- Extract complex logic into services or helpers
- Document each function with JSDoc
- Add comments explaining request flow and design decisions
