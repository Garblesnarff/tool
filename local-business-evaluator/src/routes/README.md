# Routes Directory

This directory contains **Express router modules** that define API endpoints for the Local Business Website Evaluator backend.

---

## Purpose

- Define REST API routes
- Connect HTTP endpoints to controller functions
- Organize routes by resource (businesses, interactions)
- Apply middleware if needed (auth, validation)

---

## Key Route Files

- **business-routes.js**:
  - `/api/businesses/search` (POST)
  - `/api/businesses` (GET)
- **interaction-routes.js**:
  - `/api/interactions` (POST, GET)

---

## Interaction with Other Components

- **Controllers** handle the logic for each route
- **Middleware** can be added for validation, auth, etc.
- **Server** mounts these routers on specific paths

---

## Usage Example

```javascript
const businessRoutes = require('./business-routes.js');
const interactionRoutes = require('./interaction-routes.js');

app.use('/api/businesses', businessRoutes);
app.use('/api/interactions', interactionRoutes);
```

---

## Notes

- Keep route files focused and under 200 lines
- Add comments explaining each endpoint
- Group related endpoints logically
- Use descriptive route paths
