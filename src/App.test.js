import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testing App Component', () => {
  it('loading text is shown while API request is in progress', () => {
    render(<App />);

    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });

  it('username is shown after API request', async () => {
    render(<App />);

    const listItemElements = await screen.findAllByTestId('name');
    expect(listItemElements).not.toHaveLength(0);
  });
});
