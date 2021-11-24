import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import ApplianceStatus from './ApplianceStatus';

describe('<ApplianceStatus />', () => {
  test('should renders correctrly', () => {
    const wrapper = render('<ApplianceStatus />');

    expect(wrapper).toMatchSnapshot();
  });
});
