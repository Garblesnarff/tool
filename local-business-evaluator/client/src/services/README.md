# Services Directory

This directory contains **API service modules** for the Local Business Website Evaluator frontend.

---

## Purpose

- Encapsulate HTTP requests to the backend API
- Provide reusable functions for data fetching and mutations
- Handle error management centrally

---

## Key Service Files

- `api.js`:
  - `searchBusinesses`
  - `getBusinesses`
  - `getBusinessById`
  - `createInteraction`
  - `getInteractions`

---

## Interaction with Other Components

- Called by **components** and **pages** to fetch or update data
- Use Axios instance with base URL
- Return data or throw errors for UI to handle

---

## Notes

- Document all functions with JSDoc
- Keep files under 200 lines
- Extract helpers if needed
- Handle errors gracefully
