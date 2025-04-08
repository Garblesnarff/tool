# Tests Directory

This directory contains **automated tests** for the Local Business Website Evaluator backend, using **Jest** and **Supertest**.

---

## Purpose

- Verify correctness of API endpoints
- Test database models and validation
- Mock and test external API integrations
- Ensure services and controllers behave as expected
- Prevent regressions during development

---

## Key Test Types

- **Unit Tests**:
  - Test individual functions/services in isolation
  - Mock dependencies (e.g., API calls, database)
- **Integration Tests**:
  - Test controllers and routes with real or in-memory database
  - Use Supertest to simulate HTTP requests
- **Mocking**:
  - Use Jest mocks for external APIs (Google Places, Geocoding)
  - Isolate tests from network dependencies

---

## Usage Example

```javascript
const request = require('supertest');
const app = require('../src/server.js');

describe('Business API', () => {
  it('should search businesses', async () => {
    const res = await request(app)
      .post('/api/businesses/search')
      .send({ city: 'San Francisco', state: 'CA' });
    expect(res.statusCode).toBe(200);
    expect(res.body.businesses).toBeDefined();
  });
});
```

---

## Notes

- Organize tests by component (e.g., `services/`, `controllers/`, `routes/`)
- Keep test files focused and under 200 lines
- Add comments explaining test cases and setup
- Use environment variables/configs for test environment
