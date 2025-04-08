# Config Directory

This directory contains **configuration modules** for the Local Business Website Evaluator backend.

---

## Purpose

- Manage environment variables and secrets
- Configure MongoDB connection
- Centralize app-wide configuration settings
- Facilitate environment-specific setups (development, production)

---

## Key Config Files

- **db.js**:
  - Connects to MongoDB using Mongoose
  - Handles connection errors and retries
- **env.js** (optional):
  - Loads and validates environment variables
  - Provides default values if needed

---

## Interaction with Other Components

- **Server** imports `db.js` to establish database connection
- **Services** and **controllers** rely on environment variables loaded here
- **Tests** may override configs for test environment

---

## Usage Example

```javascript
const connectDB = require('./db.js');

connectDB();
```

---

## Notes

- Keep config files small and focused
- Document all environment variables used
- Never hardcode secrets; use `.env` files and dotenv package
- Add comments explaining connection options and error handling
