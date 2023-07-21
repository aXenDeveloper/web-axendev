import Image, { ImageLoaderProps } from 'next/image';
import { useEffect, useState, forwardRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import style from './ImgLightBox.module.scss';

import { GlobalLoader } from '../../loader/global/GlobalLoader';

interface Props {
  direction: number;
  image: string;
}

export const ImgLightBox = forwardRef<HTMLDivElement, Props>(
  ({ direction, image, ...rest }, ref) => {
    const [isLoading, setIsLoading] = useState(true);

    const ownLoader = ({ quality, src, width }: ImageLoaderProps) =>
      `${src}?w=${width}&q=${quality || 75}`;

    // Refresh loading state when changing src
    useEffect(() => {
      setIsLoading(true);
    }, [image]);

    const variants = {
      enter: (direction: number) => {
        return {
          x: direction > 0 ? 1000 : -1000,
          opacity: 0
        };
      },
      center: {
        x: 0,
        opacity: 1
      },
      exit: (direction: number) => {
        return {
          x: direction < 0 ? 1000 : -1000,
          opacity: 0
        };
      }
    };

    return (
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={image}
          variants={variants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          className={style.img}
        >
          <div className={style.wrapper} ref={ref} {...rest}>
            <Image
              src={image}
              alt={image}
              width={3840}
              height={2160}
              loader={ownLoader}
              sizes="100vw"
              priority
              /* istanbul ignore next */ onLoadingComplete={
                /* istanbul ignore next */ () => setIsLoading(false)
              }
            />

            {isLoading && <GlobalLoader />}
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }
);

ImgLightBox.displayName = 'ImgLightBox';
