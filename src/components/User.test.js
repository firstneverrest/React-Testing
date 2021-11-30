import { render, screen } from '@testing-library/react';
import User from './User';

test('on initial render', () => {
  render(<User key="1" name="carlos" email="example@hotmail.com" />);
  screen.debug();
});
