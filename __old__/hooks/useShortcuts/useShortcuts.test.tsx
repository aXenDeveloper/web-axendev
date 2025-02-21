import { screen, render, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';

import { ShortcutsMock } from './useShortcuts.mock';

describe('useShortcuts', () => {
  it('should call handler function once', () => {
    const aPlusBHandler = vi.fn();

    const mockShortcutObjectArray = [
      {
        keys: ['a', 'b'],
        handler: aPlusBHandler
      }
    ];

    render(<ShortcutsMock shortcuts={mockShortcutObjectArray} />);

    const div = screen.getByText('test');

    fireEvent.keyDown(div, {
      keyCode: 'A'.charCodeAt(0)
    });
    fireEvent.keyDown(div, {
      keyCode: 'B'.charCodeAt(0)
    });

    expect(aPlusBHandler).toBeCalledTimes(1);
  });

  it('should call handler for modifier keys', () => {
    const ctrlPlusAltPlusAHandler = vi.fn();

    const mockShortcutObjectArray = [
      {
        keys: ['Ctrl', 'Alt', 'a'],
        handler: ctrlPlusAltPlusAHandler
      }
    ];

    render(<ShortcutsMock shortcuts={mockShortcutObjectArray} />);

    const div = screen.getByText('test');

    fireEvent.keyDown(div, {
      keyCode: 'A'.charCodeAt(0),
      ctrlKey: true,
      altKey: true
    });

    expect(ctrlPlusAltPlusAHandler).toBeCalledTimes(1);
  });

  it('should support numpad events', () => {
    const ctrlPlusNumpadMinusHandler = vi.fn();

    const mockShortcutObjectArray = [
      {
        keys: ['Ctrl', 'num_subtract'],
        handler: ctrlPlusNumpadMinusHandler
      }
    ];

    render(<ShortcutsMock shortcuts={mockShortcutObjectArray} />);

    const div = screen.getByText('test');

    fireEvent.keyDown(div, {
      keyCode: 109, // numpad minus
      ctrlKey: true
    });

    expect(ctrlPlusNumpadMinusHandler).toBeCalledTimes(1);
  });

  it('should not trigger handlers in input elements', () => {
    const aPlusBHandler = vi.fn();
    const ctrlPlusAltPlusAHandler = vi.fn();

    const mockShortcutObjectArray = [
      {
        keys: ['a', 'b'],
        handler: aPlusBHandler
      },
      {
        keys: ['Ctrl', 'Alt', 'a'],
        handler: ctrlPlusAltPlusAHandler
      }
    ];

    render(<ShortcutsMock shortcuts={mockShortcutObjectArray} />);

    const input = screen.getByRole('textbox');
    const div = screen.getByText('test');

    fireEvent.keyDown(input, {
      keyCode: 'A'.charCodeAt(0)
    });
    fireEvent.keyDown(input, {
      keyCode: 'B'.charCodeAt(0)
    });
    fireEvent.keyUp(input, {
      keyCode: 'A'.charCodeAt(0)
    });
    fireEvent.keyUp(input, {
      keyCode: 'B'.charCodeAt(0)
    });

    fireEvent.keyDown(div, {
      keyCode: 'A'.charCodeAt(0),
      ctrlKey: true,
      altKey: true
    });

    expect(aPlusBHandler).not.toBeCalled();
    expect(ctrlPlusAltPlusAHandler).toBeCalledTimes(1);
  });

  it('should prevent default in inputs only for events with preventDefaultInputs prop', () => {
    const aPlusBHandler = vi.fn();
    const ctrlPlusNumpadMinusHandler = vi.fn();

    const mockShortcutObjectArray = [
      {
        keys: ['a', 'b'],
        handler: aPlusBHandler
      },
      {
        keys: ['Ctrl', 'num_subtract'],
        handler: ctrlPlusNumpadMinusHandler,
        preventDefaultInputs: true
      }
    ];

    render(<ShortcutsMock shortcuts={mockShortcutObjectArray} />);
    const input = screen.getByRole('textbox');
    const defaultPrevented: boolean[] = [];

    document.addEventListener('keydown', e => {
      defaultPrevented.push(e.defaultPrevented);
    });

    fireEvent.keyDown(input, {
      keyCode: 'A'.charCodeAt(0),
      ctrlKey: true,
      altKey: true
    });

    fireEvent.keyUp(input, {
      keyCode: 'A'.charCodeAt(0)
    });

    fireEvent.keyDown(input, {
      keyCode: 109, // numpad minus
      ctrlKey: true
    });

    expect(defaultPrevented).toEqual([false, true]);
  });
});
