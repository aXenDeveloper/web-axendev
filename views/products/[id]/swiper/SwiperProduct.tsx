'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Img } from '@/components/img/Img';
import style from './SwiperProduct.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  images: string[];
}

export const SwiperProduct = ({ images }: Props) => {
  return (
    <Swiper
      slidesPerView="auto"
      className={style.wrapper}
      modules={[Navigation]}
      navigation
    >
      {images.map(image => (
        <SwiperSlide key={image}>
          <button type="button" className={style.item}>
            <Img
              src={image}
              alt=""
              fill
              sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              priority
            />
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
