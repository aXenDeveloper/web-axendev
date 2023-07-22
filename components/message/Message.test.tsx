import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { Message } from './Message';

describe('Message', () => {
  it.each`
    kind
    ${'error'}
    ${'info'}
    ${'warning'}
    ${'success'}
  `('check renders for $kind', async ({ kind }) => {
    const { getByTestId, getByText } = render(
      <Message id="test" title="Test title" kind={kind}>
        Test message
      </Message>
    );

    expect(
      getByTestId(`message_${kind}_test`).querySelector('svg')
    ).toBeDefined();

    expect(getByText('Test message')).toBeDefined();
    expect(getByText('Test title')).toBeDefined();
  });

  it('renders a message without a title', () => {
    const { queryByText } = render(
      <Message id="test">This is a message without a title</Message>
    );
    expect(queryByText('Title')).toBeFalsy();
  });
});
