import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
  });

  test('should have sign in button', () => {
    const signInButton = screen.getByText(/sign in/i);
    expect(signInButton.tagName).toBe('BUTTON');
  });

  test('should render the correct fields', () => {
    expect(screen.getByText(/username/i)).toBeInTheDocument();
    expect(screen.getByText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/keep me signed/i)).toBeInTheDocument();
  });
});
