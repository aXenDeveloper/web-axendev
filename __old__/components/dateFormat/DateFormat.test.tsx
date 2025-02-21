import { render } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import { DateFormat } from './DateFormat';

import { RootMock } from '../../__mocks__/RootMock';

describe('DateFormat ', () => {
  it('renders with date and time', () => {
    const { getByText } = render(<DateFormat date={1641038400} />, { wrapper: RootMock });
    expect(getByText('01/01/2022, 12:00 PM')).toBeDefined();
  });

  it('renders with UTC time', () => {
    const { getByText } = render(<DateFormat date={1641038400} showUTC />, { wrapper: RootMock });
    expect(getByText('01/01/2022, 12:00 PM')).toBeDefined();
  });
});
