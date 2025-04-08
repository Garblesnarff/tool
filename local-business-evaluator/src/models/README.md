# Models Directory

This directory contains all **Mongoose schemas** representing the core data models for the Local Business Website Evaluator backend.

---

## Purpose

Define the structure of data stored in MongoDB, including validation rules, default values, and relationships.

---

## Key Models

- **business.js**: Schema for local businesses, including contact info, website evaluation, category, and priority.
- **interaction.js**: Schema for tracking interactions (calls, emails, visits) with businesses.

---

## Interaction with Other Components

- **Controllers** use these models to create, read, update, and delete data.
- **Services** may enrich or evaluate data before saving.
- **Routes** trigger controller actions that manipulate these models.

---

## Usage Example

```javascript
const Business = require('./business.js');

const newBiz = new Business({
  placeId: 'abc123',
  name: 'Sample Business',
  city: 'San Francisco',
  state: 'CA'
});

await newBiz.save();
```

---

## Notes

- Keep schemas focused and under 200 lines.
- Use schema methods or statics for reusable logic.
- Document all fields and relationships clearly.
