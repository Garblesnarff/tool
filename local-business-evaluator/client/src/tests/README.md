# Tests Directory

This directory contains **frontend tests** for the Local Business Website Evaluator React app, using **React Testing Library**.

---

## Purpose

- Verify component rendering and behavior
- Test user interactions
- Mock API calls
- Prevent regressions during development

---

## Key Test Types

- **Component Tests**:
  - Render components with props/context
  - Check UI output
- **Interaction Tests**:
  - Simulate user input and clicks
  - Verify state changes and API calls
- **Mocking**:
  - Mock API service functions
  - Isolate components from backend

---

## Usage Example

```javascript
import { render, screen } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

test('renders search form', () => {
  render(<SearchForm />);
  expect(screen.getByText(/search businesses/i)).toBeInTheDocument();
});
```

---

## Notes

- Organize tests by component/page
- Keep test files under 200 lines
- Add comments explaining test cases
- Use mocks/stubs for API calls
