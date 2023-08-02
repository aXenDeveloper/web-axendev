'use client';

/* eslint-disable @typescript-eslint/ban-ts-comment */
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

import { ProductsInterface } from '../configProducts';
import style from './ItemProducts.module.scss';
import { Img } from '@/components/img/Img';
import { Badge } from '@/components/badge/Badge';

export const ItemProducts = ({
  categories,
  deprecated,
  id,
  images,
  name,
  price
}: ProductsInterface) => {
  const t = useTranslations('products');

  return (
    <Link href={`/products/${id}`} className={style.wrapper}>
      <div className={style.img}>
        <Img
          src={images[0]}
          alt={name}
          fill
          heightLoading={192}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className={style.info}>
        <div className={style.title}>
          <span>{categories.map(category => t(`categories.${category}`)).join(', ')}</span>

          <h3>{name}</h3>
        </div>

        {/* @ts-expect-error */}
        <p>{t(`descriptions.${id}`)}</p>

        <div className={style.footer}>
          <span>{price !== 0 ? <>${price}</> : t('free')}</span>
          {deprecated && <Badge kind="warning">{t('deprecated.title')}</Badge>}
        </div>
      </div>
    </Link>
  );
};
