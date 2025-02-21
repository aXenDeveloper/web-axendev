'use client';

import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import ThumbsSwiper from 'swiper';
import { AnimatePresence } from 'framer-motion';

import { Img } from '@/components/img/Img';
import style from './SwiperProduct.module.scss';
import { LightBox } from '@/components/lightbox/LightBox';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

interface Props {
  images: string[];
}

export const SwiperProduct = ({ images }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<ThumbsSwiper | null>(null);
  const [activeIdLightBox, setActiveIdLightBox] = useState('');

  return (
    <>
      <Swiper
        slidesPerView={1}
        className={style.swiper}
        modules={[Navigation, Thumbs, FreeMode]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        navigation
      >
        {images.map(image => (
          <SwiperSlide key={image}>
            <button type="button" className={style.item} onClick={() => setActiveIdLightBox(image)}>
              <Img
                src={image}
                alt=""
                fill
                sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={2}
        freeMode
        watchSlidesProgress
        modules={[Navigation, Thumbs, FreeMode]}
        className={style.thumbs}
        breakpoints={{
          500: {
            slidesPerView: 4
          }
        }}
      >
        {images.map(image => (
          <SwiperSlide className={style.thumbs_item} key={image}>
            <Img
              src={image}
              alt=""
              fill
              sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        {activeIdLightBox && (
          <LightBox activeId={activeIdLightBox} images={images} setActiveId={setActiveIdLightBox} />
        )}
      </AnimatePresence>
    </>
  );
};
