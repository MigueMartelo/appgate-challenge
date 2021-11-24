import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import ErrorMessage from './ErrorMessage';

describe('<ErrorMessage />', () => {
  test('renders App title', () => {
    const message = 'test message';
    render(
      <MemoryRouter>
        <ErrorMessage message={message} />
      </MemoryRouter>
    );
    const errorMessage = screen.getByText(message);
    expect(errorMessage).toBeInTheDocument();
  });
});
