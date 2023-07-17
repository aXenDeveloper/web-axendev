import cx from 'classnames';
import { useTranslations } from 'next-intl';

import { ProductsInterface } from '../configProducts';
import style from './ProductView.module.scss';
import { BackLinkProduct } from './backLink/BackLinkProduct';
import { SwiperProduct } from './swiper/SwiperProduct';
import { DetailsProduct } from './details/DetailsProduct';
import { DeprecatedProduct } from './deprecated/DeprecatedProduct';

export const ProductView = ({
  deprecated,
  id,
  images,
  name,
  ...props
}: ProductsInterface) => {
  const t = useTranslations('products');

  return (
    <div className={cx(style.wrapper, 'layout_wrapper')}>
      <aside>
        <div className={style.header}>
          <BackLinkProduct />

          <h1>{name}</h1>

          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-expect-error */}
          <p>{t(`descriptions.${id}`)}</p>
        </div>

        <DetailsProduct
          id={id}
          name={name}
          deprecated={deprecated}
          {...props}
        />
      </aside>

      <article>
        {deprecated && <DeprecatedProduct />}
        <SwiperProduct images={images} />
      </article>
    </div>
  );
};
