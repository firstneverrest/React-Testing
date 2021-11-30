# React Testing

React provides React Testing library and Jest to test your react app by default.

- React testing library - provides virtual DOM for tests
- Jest - test runner that finds tests, run tests, determines whether tests pass or fail

## What you need to test?

- Component rendering, props
- User interaction
- Conditional rendering
- Util & Hook
- API request, response

## How to run test?

1. Run all test files

```
npm test
```

2. Run some files

```
npm test -- <filename1> <filename2> <filenameN>
```

## Basic command

- `render()`- render component in virtual DOM
- `screen.debug()` - show html DOM while testing to improve understanding
- `screen.getByRole('button', {name})` - get element by tag
- `screen.findByRole('button', {name})` - like getByRole but be used for async/await

## Unit testing

Test individual component like component rendering.

```js
// example 1
import { render, screen } from '@testing-library/react';
import User from './User';

test('on initial render', () => {
  render(<User key="1" name="carlos" email="example@hotmail.com" />);
  screen.debug();
});
```

```js
// example 2
import { render, screen } from '@testing-library/react';
import User from './User';

test('on initial render', () => {
  render(<User key="1" name="carlos" email="example@hotmail.com" />);
  expect(screen.getByRole('button', { name: /buy/i })).toBeEnabled();
});
```

```js
// example 3
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header after getting users', async () => {
  render(<App />);

  // use findByText instead of getByText to enable async/await
  const linkElement = await screen.findByText(/User Accounts/i);
  expect(linkElement).toBeInTheDocument();
});
```
