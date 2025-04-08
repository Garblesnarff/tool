# Phase 1: Backend Foundation & API Integration

This document outlines the first phase of the Local Business Website Evaluator project. The goal is to establish a solid backend foundation, integrate with external APIs, and enable basic business data collection and storage.

---

## Objectives

- Initialize project repository with Node.js and Express.js backend
- Set up MongoDB connection and define schemas
- Integrate with Google Places and Geocoding APIs
- Develop core backend endpoints for business search and storage
- Implement a basic website evaluation stub
- Minimal testing for API endpoints and models

---

## Step 1: Project Initialization

1. Create project directory:

```bash
mkdir local-business-evaluator
cd local-business-evaluator
npm init -y
```

2. Install backend dependencies:

```bash
npm install express cors mongoose dotenv helmet axios
```

3. Initialize git repository (optional):

```bash
git init
```

4. Set up `.env` file with:

```
GOOGLE_PLACES_API_KEY=your_google_api_key
MONGODB_URI=your_mongodb_connection_string
```

---

## Step 2: MongoDB Setup

- Use MongoDB Atlas or local MongoDB instance
- Define schemas:

### Business Schema

- placeId, name, address, phoneNumber, website, city, state
- evaluation object (hasWebsite, score, lastUpdated, etc.)
- category (no_website, outdated, basic, modern)
- priority (1-10)
- timestamps

### Interaction Schema

- businessId (ref to Business)
- type (email, call, visit, proposal, followup)
- notes
- outcome (interested, not_interested, followup_later, closed_deal, no_response)
- timestamps

---

## Step 3: API Integration Module

- Create `services/googlePlacesService.js`
- Implement methods:
  - `getGeocode(city, state)`
  - `searchBusinesses(city, state, type, pageToken)`
  - `getBusinessDetails(placeId)`
- Use Google Places API and Geocoding API
- Handle pagination with `next_page_token`

---

## Step 4: Website Evaluation Service (Stub)

- Create `services/websiteEvaluationService.js`
- For now, implement a stub that:
  - Checks if website URL exists
  - Returns dummy scores and recommendations
- Later phases will enhance this with Lighthouse and Puppeteer

---

## Step 5: Backend Endpoints

- Set up Express server (`server.js`)
- Implement routes:

| Endpoint                     | Method | Description                                  |
|------------------------------|--------|----------------------------------------------|
| `/api/businesses/search`     | POST   | Search businesses, evaluate, store in DB     |
| `/api/businesses`            | GET    | List businesses with filters/sorting         |
| `/api/interactions`          | POST   | Create interaction record                    |
| `/api/interactions`          | GET    | List interactions (optionally by businessId) |

- Use controllers to handle logic
- Categorize businesses based on website status
- Calculate priority score

---

## Step 6: Testing

- Use Jest and Supertest for API tests
- Test:
  - API integrations (mocked)
  - Database models
  - Core endpoints

---

## Deliverables

- Node.js + Express backend connected to MongoDB
- API integration with Google Places & Geocoding
- Core endpoints for searching and storing businesses
- Basic website evaluation stub
- Minimal tests verifying core functionality

---

## Next Phase

Proceed to **Phase 2** after backend is stable and can collect/store business data.
