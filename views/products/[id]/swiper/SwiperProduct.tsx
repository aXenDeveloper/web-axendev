'use client';

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';

import { Img } from '@/components/img/Img';
import style from './SwiperProduct.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  images: string[];
}

export const SwiperProduct = ({ images }: Props) => {
  const ref = useRef<SwiperRef>(null);

  return (
    <Swiper
      slidesPerView="auto"
      className={style.wrapper}
      ref={ref}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true
      }}
      modules={[Navigation, Autoplay]}
      navigation
    >
      {images.map(image => (
        <SwiperSlide key={image}>
          <button
            type="button"
            className={style.item}
            onClick={() => {
              ref.current?.swiper.autoplay.pause();
            }}
          >
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
  );
};
