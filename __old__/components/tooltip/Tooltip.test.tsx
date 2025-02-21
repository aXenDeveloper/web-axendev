import { fireEvent, render, cleanup, waitFor } from '@testing-library/react';
import { expect, describe, it, afterEach } from 'vitest';

import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders children', () => {
    const { getByText } = render(
      <Tooltip content="Hello">
        <button>Button</button>
      </Tooltip>
    );

    expect(getByText('Button')).toBeDefined();
  });

  it('opens tooltip on mouseenter', async () => {
    const { getByText } = render(
      <Tooltip content="Hello">
        <button data-testid>Button</button>
      </Tooltip>
    );

    fireEvent.mouseEnter(getByText('Button'));

    await waitFor(() => {
      expect(getByText('Hello')).toBeDefined();
    });
  });

  it('closes tooltip on mouseleave', async () => {
    const { getByText, queryByText } = render(
      <Tooltip content="Hello">
        <button>Button</button>
      </Tooltip>
    );

    fireEvent.mouseEnter(getByText('Button'));

    await waitFor(() => {
      expect(queryByText('Hello')).toBeDefined();
    });

    fireEvent.mouseLeave(getByText('Button'));

    await waitFor(() => {
      expect(queryByText('Hello')).toBeNull();
    });
  });

  it.each`
    placement         | expected
    ${'top-start'}    | ${'top-start'}
    ${'top-end'}      | ${'top-end'}
    ${'bottom-start'} | ${'bottom-start'}
    ${'bottom-end'}   | ${'bottom-end'}
    ${'right-start'}  | ${'right-start'}
    ${'right-end'}    | ${'right-end'}
    ${'left-start'}   | ${'left-start'}
    ${'left-end'}     | ${'left-end'}
  `(
    'check render "$placement" placement - Expected "$expected"',
    async ({ expected, placement }) => {
      const { getByRole, getByText } = render(
        <Tooltip placement={placement} content="Test Content For Tooltip">
          <button>Button</button>
        </Tooltip>
      );

      fireEvent.mouseEnter(getByText('Button'));

      await waitFor(() => {
        expect(getByRole('tooltip').getAttribute('data-placement')).toBe(expected);
      });
    }
  );

  it('closes tooltip on click', async () => {
    const { getByText, queryByText } = render(
      <Tooltip content="Hello" closeOnClick>
        <button>Button</button>
      </Tooltip>
    );

    fireEvent.mouseEnter(getByText('Button'));

    await waitFor(() => {
      expect(getByText('Hello')).toBeDefined();
    });

    fireEvent.click(getByText('Button'));

    await waitFor(() => {
      expect(queryByText('Hello')).toBeNull();
    });
  });
});
