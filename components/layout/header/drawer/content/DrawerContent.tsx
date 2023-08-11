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
import { Switches } from '@/components/switches/Switches';

import { useStateNav } from '../../nav/useStateNav';
import { ItemNav } from '../../nav/item/ItemNav';

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DrawerContent = ({ setOpen }: Props) => {
  const state = useStateNav();

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
      <FloatingOverlay className={style.overlay} lockScroll>
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
            <nav className={style.nav}>
              <ul>
                {state.map(item => (
                  <ItemNav key={item.id} onClick={() => setOpen(false)} {...item} />
                ))}
              </ul>
            </nav>

            <Switches className={style.switches} />
          </motion.div>
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  );
};
