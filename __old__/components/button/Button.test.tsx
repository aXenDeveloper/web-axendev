import { render, fireEvent, waitFor } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import { Button } from './Button';

import { RootMock } from '../../__mocks__/RootMock';

describe('Button', () => {
  it('renders children', () => {
    const { getByText } = render(<Button id="test">Hello World</Button>);
    expect(getByText('Hello World')).toBeDefined();
  });

  it('renders a button element', () => {
    const { getByTestId } = render(<Button id="test">Click me</Button>);
    const button = getByTestId('button_test');
    expect(button.tagName).toBe('BUTTON');
  });

  it('renders an anchor element when href is provided', () => {
    const { getByTestId } = render(
      <Button id="test" href="/foo">
        Click me
      </Button>,
      { wrapper: RootMock }
    );
    const button = getByTestId('button_test');
    expect(button.tagName).toBe('A');
  });

  it('renders an anchor element with target="_blank" when externalLink is true', () => {
    const { getByTestId } = render(
      <Button id="test" href="/foo" externalLink>
        Click me
      </Button>
    );
    const button = getByTestId('button_test');
    expect(button.tagName).toBe('A');
    expect(button.getAttribute('target')).toBe('_blank');
  });

  it('renders a Tooltip component when iconOnlyText is provided', async () => {
    const { getByRole, getByTestId } = render(
      <Button id="test" iconOnlyText="foo">
        Click me
      </Button>
    );
    const button = getByTestId('button_test');

    fireEvent.mouseEnter(button);

    await waitFor(() => {
      expect(getByRole('tooltip')).toBeDefined();
    });
  });
});
