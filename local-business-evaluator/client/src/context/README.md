# Context Directory

This directory contains **React Context API** modules for global state management in the Local Business Website Evaluator frontend.

---

## Purpose

- Manage shared state across components and pages
- Avoid prop drilling
- Provide easy access to app-wide data and actions

---

## Key Context Files

- `AppContext.jsx`:
  - Business list
  - Selected business
  - Loading/error states
  - Search parameters

---

## Interaction with Other Components

- **Components** and **pages** consume context via hooks
- Context provides state and dispatch functions
- API services update context state

---

## Notes

- Document context shape and usage
- Keep context files under 200 lines
- Extract hooks/helpers if needed
- Use JSDoc for context provider and hooks
