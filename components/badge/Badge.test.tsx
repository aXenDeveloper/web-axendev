import { render } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import { Badge } from './Badge';
import { MessageKindTypes } from '../message/Message';

describe('Badge', () => {
  it('renders children', () => {
    const { getByText } = render(<Badge kind="info">Hello World</Badge>);
    expect(getByText('Hello World')).toBeDefined();
  });

  it.each<{ kind: MessageKindTypes }>([
    { kind: 'info' },
    { kind: 'error' },
    { kind: 'success' },
    { kind: 'warning' }
  ])('renders $kind kind', ({ kind }) => {
    const { getByText } = render(<Badge kind={kind}>Hello World</Badge>);
    const badge = getByText('Hello World');

    expect(badge.className).toMatch(kind);
  });
});
