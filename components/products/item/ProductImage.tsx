import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductImageType } from '../../../types/components/productsTypes';
import SwiperCore, { Lazy, Navigation } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ProductImage = ({ images }: ProductImageType) => {
  SwiperCore.use([Lazy, Navigation]);

  return (
    <div className="products_item_img">
      <Swiper
        autoHeight
        lazy={{
          loadPrevNext: true
        }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
      >
        {images.map(el => (
          <SwiperSlide key={el}>
            <a href={el} target="blank" rel="noopener nofollow">
              <img src={el} className="swiper-lazy" />
              <div className="swiper-lazy-preloader"></div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-next">
        <FontAwesomeIcon icon={faChevronRight} />
      </div>

      <div className="swiper-button-prev">
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    </div>
  );
};

export default ProductImage;
