import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useInteractions
} from '@floating-ui/react';
import { Dispatch, SetStateAction, useState } from 'react';
import { motion } from 'framer-motion';
import cx from 'clsx';
import { ChevronLeft24Filled, ChevronRight24Filled, Dismiss24Filled } from '@fluentui/react-icons';
import { useTranslations } from 'next-intl';

import style from './LightBox.module.scss';
import { ImgLightBox } from './img/ImgLightBox';
import { Button } from '../button/Button';
import { useActionsLightBox } from './hooks/useActionsLightBox';

interface Props {
  activeId: string;
  images: string[];
  setActiveId: Dispatch<SetStateAction<string>>;
}

export const LightBox = ({ activeId, images, setActiveId }: Props) => {
  const t = useTranslations('global');
  const [direction, setDirection] = useState(1);
  const { context, refs } = useFloating({
    open: true,
    onOpenChange: prev => {
      if (!prev) {
        setActiveId('');
      }
    }
  });

  const { getFloatingProps } = useInteractions([useClick(context), useDismiss(context)]);
  const currentImageIndex = images.findIndex(item => item === activeId);

  const handleChangePhoto = ({ next }: { next: boolean }) => {
    if (next && currentImageIndex !== images.length - 1) {
      setDirection(1);
      setActiveId(images[currentImageIndex + 1]);

      return;
    }

    if (!next && currentImageIndex !== 0) {
      setDirection(-1);
      setActiveId(images[currentImageIndex - 1]);
    }

    return;
  };

  const { handlers } = useActionsLightBox({
    activeId,
    handleChangePhoto
  });

  const currentImage = images.find(item => item === activeId);
  if (!currentImage) return null;

  return (
    <FloatingOverlay lockScroll>
      <FloatingFocusManager context={context} initialFocus={-1}>
        <FloatingPortal>
          <motion.div
            className={style.main}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div ref={refs.setFloating} {...getFloatingProps()}>
              <ImgLightBox direction={direction} image={currentImage} {...handlers} />

              {currentImageIndex !== 0 && (
                <motion.div
                  className={cx(style.buttons, style.buttons_prev)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Button
                    id="prev"
                    kind="secondary"
                    onClick={() => handleChangePhoto({ next: false })}
                    iconOnlyText={t('lightBox.prev')}
                  >
                    <ChevronLeft24Filled />
                  </Button>
                </motion.div>
              )}

              {currentImageIndex !== images.length - 1 && (
                <motion.div
                  className={cx(style.buttons, style.buttons_next)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Button
                    id="next"
                    kind="secondary"
                    onClick={() => handleChangePhoto({ next: true })}
                    iconOnlyText={t('lightBox.next')}
                  >
                    <ChevronRight24Filled />
                  </Button>
                </motion.div>
              )}

              <Button
                id="close"
                kind="secondary"
                className={cx(style.buttons, style.buttons_close)}
                onClick={() => setActiveId('')}
                iconOnlyText={t('lightBox.close')}
              >
                <Dismiss24Filled />
              </Button>
            </div>
          </motion.div>
        </FloatingPortal>
      </FloatingFocusManager>
    </FloatingOverlay>
  );
};
