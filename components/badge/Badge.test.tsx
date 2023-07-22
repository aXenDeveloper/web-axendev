import { render } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import { Badge } from './Badge';

describe('Badge', () => {
  it('renders children', () => {
    const { getByText } = render(<Badge kind="primary">Hello World</Badge>);
    expect(getByText('Hello World')).toBeDefined();
  });
});
