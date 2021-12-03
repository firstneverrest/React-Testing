import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testing App Component', () => {
  it('loading text is shown while API request is in progress', () => {
    render(<App />);

    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });

  it('renders user card if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        { id: 1, name: 'John Doe', email: 'example@hotmail.com' },
      ],
    });

    render(<App />);

    const listItemElements = await screen.findAllByTestId('name');
    expect(listItemElements).not.toHaveLength(0);
  });

  it('delete a user when clicked delete button', async () => {
    render(<App />);

    const deleteButton = await screen.findAllByRole('button');
    const firstUser = screen.getAllByTestId('name')[0];
    userEvent.click(deleteButton[0]);
    expect(firstUser).not.toBeInTheDocument();
  });
});
