'use client';

import { MutableRefObject, cloneElement, forwardRef, useState } from 'react';
import {
  autoUpdate,
  flip,
  offset,
  Placement,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useInteractions,
  useRole,
  useHover,
  FloatingPortal,
  useMergeRefs
} from '@floating-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import style from './Tooltip.module.scss';
import { useGlobal } from '@/hooks/useGlobal';

interface Props {
  children: JSX.Element;
  content: JSX.Element | string;
  closeOnClick?: boolean;
  placement?: Placement;
  strategy?: 'fixed' | 'absolute';
}

export const Tooltip = forwardRef<HTMLButtonElement & HTMLAnchorElement, Props>(
  (
    { children, closeOnClick, content, placement, strategy: strategyFromProps, ...parentProps },
    parentRef
  ) => {
    const [open, setOpen] = useState(false);
    const { floatingPortalNode } = useGlobal();

    const {
      context,
      placement: currentPlacement,
      refs,
      strategy,
      x,
      y
    } = useFloating({
      placement,
      open,
      onOpenChange: setOpen,
      middleware: [offset(8), flip(), shift({ padding: 8 })],
      strategy: strategyFromProps,
      whileElementsMounted: autoUpdate
    });

    const ref = useMergeRefs([
      refs.setReference,
      (children as unknown as { ref: MutableRefObject<unknown> }).ref,
      parentRef
    ]);

    const { getFloatingProps, getReferenceProps } = useInteractions([
      useHover(context, { delay: { open: 300, close: 0 } }),
      useFocus(context),
      useRole(context, { role: 'tooltip' }),
      useDismiss(context)
    ]);

    return (
      <>
        {cloneElement(
          children,
          getReferenceProps({
            ref,
            ...children.props,
            ...parentProps,
            onClick: e => {
              if (closeOnClick) {
                setOpen(prev => !prev);
              }
              /* c8 ignore next 1 */
              children.props.onClick?.(e);
            }
          })
        )}

        <FloatingPortal root={floatingPortalNode}>
          <AnimatePresence>
            {open && (
              <motion.div
                className={style.wrapper}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                ref={refs.setFloating}
                data-placement={currentPlacement}
                style={{
                  position: strategy,
                  /* c8 ignore next 2 */
                  top: y ?? 0,
                  left: x ?? 0
                }}
                {...getFloatingProps()}
              >
                {content}
              </motion.div>
            )}
          </AnimatePresence>
        </FloatingPortal>
      </>
    );
  }
);

Tooltip.displayName = 'Tooltip';
