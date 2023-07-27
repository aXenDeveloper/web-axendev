import hotkeys, { HotkeysEvent, KeyHandler } from 'hotkeys-js';
import { useEffect, useCallback } from 'react';

export interface ShortcutObject {
  handler: KeyHandler;
  keys: string[];
  /*
      Keyboard shortcuts are disabled in input elements
      Specify whether useShortcuts should prevent default behavior of such shortcut
      if event target is an input element
  */
  preventDefaultInputs?: boolean;
}

interface UseShortcutsArgs {
  shortcuts: ShortcutObject[];
}

const TARGET_FILTER = ['INPUT', 'TEXTAREA', 'SELECT'];

/*
  Do not trigger shortcuts for tags in TAG_FILTER
*/
const filterTags = ({ target }: KeyboardEvent) =>
  target && !TARGET_FILTER.includes((target as unknown as HTMLElement).tagName);

export const useShortcuts = ({ shortcuts }: UseShortcutsArgs) => {
  const handlerCallback = useCallback(
    (e: KeyboardEvent, hke: HotkeysEvent) => {
      const filteredShortcuts = shortcuts.filter(value => value.keys.join('&') === hke.shortcut);
      filteredShortcuts.forEach(shortcut => {
        if (!filterTags(e)) {
          if (shortcut.preventDefaultInputs) {
            e.preventDefault();
            e.stopPropagation();
          }

          return;
        }

        e.preventDefault();
        e.stopPropagation();

        shortcut.handler(e, hke);
      });
    },
    [shortcuts]
  );

  useEffect(() => {
    const shortcutArray: string[] = [];
    shortcuts.forEach(shortcut => {
      /* 
          As default split key is "+" (can't be used in shortcuts)
          It has been replaced with "&" (unlikely to be part of a shortcut) 
      */
      shortcutArray.push(shortcut.keys.join('&'));
    });
    hotkeys.filter = () => true; // remove default filter
    hotkeys(
      shortcutArray.join(','),
      { splitKey: '&', keyup: false, keydown: true },
      handlerCallback
    );

    return () => {
      hotkeys.unbind(shortcutArray.join(','), handlerCallback);
    };
  }, [shortcuts]);
};
