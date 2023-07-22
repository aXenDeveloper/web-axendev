import { useMemo } from 'react';
import { useSwipeable } from 'react-swipeable';

import {
  ShortcutObject,
  useShortcuts
} from '@/hooks/useShortcuts/useShortcuts';

interface Args {
  activeId: string;
  handleChangePhoto: (args: { next: boolean }) => void;
}

export const useActionsLightBox = ({ activeId, handleChangePhoto }: Args) => {
  // Keyboard shortcuts
  const shortcuts: ShortcutObject[] = useMemo(
    () => [
      {
        keys: ['Left'],
        handler: () => {
          handleChangePhoto({ next: false });
        },
        preventDefaultInputs: true
      },
      {
        keys: ['Right'],
        handler: () => {
          handleChangePhoto({ next: true });
        },
        preventDefaultInputs: true
      }
    ],
    [activeId]
  );

  useShortcuts({ shortcuts });

  // Swipe
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      handleChangePhoto({ next: true });
    },
    onSwipedRight: () => {
      handleChangePhoto({ next: false });
    },
    trackMouse: true
  });

  return { handlers };
};
