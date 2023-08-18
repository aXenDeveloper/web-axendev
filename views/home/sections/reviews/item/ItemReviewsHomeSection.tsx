import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

import style from './ItemReviewsHomeSection.module.scss';

import { dataProducts } from '../../../../products/dataProducts';

interface Props {
  from: {
    href: string;
    name: string;
  };
  id: string;
  name: string;
  productId: string;
}

export const ItemReviewsHomeSection = ({ from, id, name, productId }: Props) => {
  const t = useTranslations('home');

  const product = dataProducts.find(product => product.id === productId);
  if (!product) return null;

  return (
    <figure className={style.wrapper}>
      <Link href={`/products/${product.id}`}>{product.name}</Link>
      <blockquote className={style.content}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <p>{`"${t(`reviews.items.item_${id}`)}"`}</p>
      </blockquote>
      <figcaption className={style.footer}>
        <div>{name}</div>
        <a href={from.href} target="_blank" rel="noopener noreferrer">
          {from.name}
        </a>
      </figcaption>
    </figure>
  );
};
