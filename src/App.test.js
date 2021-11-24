import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import App from './App';

describe('<App />', () => {
  test('renders App title', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const titleElement = screen.getByText(/appgate sdp/i);
    expect(titleElement).toBeInTheDocument();
  });
});
