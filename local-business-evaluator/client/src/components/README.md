# Components Directory

This directory contains **reusable React UI components** for the Local Business Website Evaluator frontend.

---

## Purpose

- Encapsulate UI elements with specific functionality
- Promote reusability and modularity
- Keep components small and focused (<200 lines)

---

## Key Components

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

---

## Interaction with Other Components

- Used inside **pages** to build full views
- Communicate via props and context
- Call API services for data

---

## Notes

- Each component should have a file header and JSDoc for props
- Use Tailwind CSS for styling
- Extract helpers/hooks if components grow large
