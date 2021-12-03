import { render, screen } from '@testing-library/react';
import User from './User';

it('on initial render', () => {
  render(<User key="1" name="carlos" email="example@hotmail.com" />);
  // screen.debug();
  expect(screen.getByRole('heading', { name: /Name: carlos/i })).toBeEnabled();
});

it('renders correct name', () => {
  render(<User key="1" name="carlos" email="example@hotmail.com" />);
  expect(screen.getByTestId('name')).toHaveTextContent('carlos');
  screen.debug();
});
