import Link from 'next-intl/link';

import { ProductsInterface } from '../configProducts';
import style from './ItemProductsView.module.scss';
import { Img } from '@/components/img/Img';

export const ItemProductsView = ({ id, imgs, name }: ProductsInterface) => {
  return (
    <Link href={`/products/${id}`} className={style.wrapper}>
      <div className={style.img}>
        <Img src={imgs[0]} alt={name} fill />
      </div>

      <div className={style.info}>
        <h3>{name}</h3>
      </div>
    </Link>
  );
};
