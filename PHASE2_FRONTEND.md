# Phase 2: Frontend UI & Enhanced Evaluation

This document outlines the second phase of the Local Business Website Evaluator project. The goal is to build a user-friendly frontend, connect it to the backend, and enhance the website evaluation capabilities.

---

## Objectives

- Scaffold React app with Tailwind CSS styling
- Develop UI components for search, business list, details, and interactions
- Connect frontend to backend APIs
- Enhance website evaluation with Lighthouse and Puppeteer
- Add interaction tracking features
- Expand backend tests for new features

---

## Step 1: Frontend Setup

1. From the project root, create the React app:

```bash
npx create-react-app client
cd client
```

2. Install frontend dependencies:

```bash
npm install axios tailwindcss postcss autoprefixer chart.js react-chartjs-2
```

3. Initialize Tailwind CSS:

```bash
npx tailwindcss init -p
```

4. Configure `tailwind.config.js` and include Tailwind in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Set up environment variable:

```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## Step 2: UI Component Development

Create the following components under `client/src/components/`:

- `SearchForm.jsx` — input city/state, trigger search
- `BusinessList.jsx` — display list of businesses
- `BusinessCard.jsx` — summary card for each business
- `BusinessDetail.jsx` — detailed info and evaluation
- `InteractionForm.jsx` — add new interaction
- `InteractionList.jsx` — list of interactions
- `EvaluationMetrics.jsx` — show website scores visually
- `Navigation.jsx` — app navigation bar
- `Dashboard.jsx` — summary stats and charts
- `Reports.jsx` — generate and view reports

Create pages under `client/src/pages/`:

- `HomePage.jsx` — landing/search page
- `SearchPage.jsx` — search results
- `BusinessDetailPage.jsx` — detailed business info
- `ReportsPage.jsx` — reports and analytics

---

## Step 3: API Service Layer

- Create `client/src/services/api.js`
- Implement functions:
  - `searchBusinesses(city, state, types)`
  - `getBusinesses(filters)`
  - `getBusinessById(id)`
  - `createInteraction(data)`
  - `getInteractions(businessId)`
- Use Axios for HTTP requests
- Handle errors gracefully

---

## Step 4: State Management

- Create `client/src/context/AppContext.jsx`
- Use React Context API to manage:
  - Business list
  - Selected business
  - Loading/error states
  - Search parameters

---

## Step 5: Connect Frontend to Backend

- Use API service to:
  - Search businesses and display results
  - View detailed business info
  - Add and view interactions
- Display website evaluation metrics and screenshots
- Filter and sort businesses by category and priority

---

## Step 6: Enhance Website Evaluation

- In backend `websiteEvaluationService.js`:
  - Integrate Lighthouse (Node module or CLI)
  - Capture website screenshots with Puppeteer
  - Extract metrics: performance, design, functionality, SEO
  - Generate improvement recommendations
- Store evaluation results in MongoDB
- Display enhanced metrics in frontend

---

## Step 7: Testing

- Use React Testing Library for frontend tests:
  - Component rendering
  - User interactions
  - API calls (mocked)
- Expand backend tests for enhanced evaluation logic

---

## Deliverables

- React frontend with Tailwind CSS
- UI components for search, list, detail, interactions
- Connected to backend APIs
- Enhanced website evaluation with Lighthouse and Puppeteer
- Interaction tracking features
- Tests for frontend and backend enhancements

---

## Next Phase

Proceed to **Phase 3** after frontend and enhanced evaluation are functional.
