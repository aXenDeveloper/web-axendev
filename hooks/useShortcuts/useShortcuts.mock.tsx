import { ShortcutObject, useShortcuts } from './useShortcuts';

interface ComponentUseShortcutsMockProps {
  shortcuts: ShortcutObject[];
}

export const ShortcutsMock = ({
  shortcuts
}: ComponentUseShortcutsMockProps) => {
  useShortcuts({ shortcuts });

  return (
    <>
      <div>test</div>
      <input type="text" />
    </>
  );
};
