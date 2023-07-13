import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

import { ProductsInterface } from '../configProducts';
import style from './ItemProductsView.module.scss';
import { Img } from '@/components/img/Img';

export const ItemProductsView = ({ id, imgs, name }: ProductsInterface) => {
  const t = useTranslations('products');

  return (
    <Link href={`/products/${id}`} className={style.wrapper}>
      <div className={style.img}>
        <Img
          src={imgs[0]}
          alt={name}
          fill
          heightLoading={192}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className={style.info}>
        <h3>{name}</h3>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <p>{t(`descriptions.${id}`)}</p>
      </div>
    </Link>
  );
};
