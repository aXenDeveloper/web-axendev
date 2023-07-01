import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useFloating,
  useInteractions,
  useRole
} from '@floating-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';

import style from './DrawerContent.module.scss';

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DrawerContent = ({ setOpen }: Props) => {
  const { context, refs } = useFloating({
    open: true,
    onOpenChange: setOpen
  });

  const { getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context, { role: 'menu' })
  ]);

  return (
    <FloatingPortal>
      <FloatingOverlay lockScroll>
        <FloatingFocusManager context={context}>
          <motion.div
            className={style.wrapper}
            initial={{ translateX: '100%' }}
            animate={{ translateX: '0%' }}
            exit={{ translateX: '100%' }}
            transition={{ ease: 'easeInOut', duration: 0.2 }}
            ref={refs.setFloating}
            {...getFloatingProps()}
          >
            DrawerContent
          </motion.div>
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  );
};
