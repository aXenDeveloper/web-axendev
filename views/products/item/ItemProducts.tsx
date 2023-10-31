/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useTranslations } from 'next-intl';
import cx from 'clsx';

import { ProductsInterface } from '../productsData';
import style from './ItemProducts.module.scss';
import { Img } from '@/components/img/Img';
import { Badge } from '@/components/badge/Badge';
import { Link } from '@/i18n';

export const ItemProducts = ({
  categories,
  deprecated,
  id,
  images,
  name,
  oneUSDtoPLN,
  price,
  single
}: ProductsInterface) => {
  const t = useTranslations('products');

  const convertPrice = () => {
    if (!price) return <span className={style.highlight}>{t('free')}</span>;

    return (
      <>
        <span className={style.highlight}>{price} PLN</span>
        {oneUSDtoPLN && (
          <>
            <span>{t('or')}</span>
            <span className={style.highlight}>${(price / oneUSDtoPLN).toFixed(2)}</span>
          </>
        )}
      </>
    );
  };

  return (
    <Link
      href={`/products/${id}`}
      className={cx(style.wrapper, {
        [style.single]: single
      })}
    >
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
          <span>{convertPrice()}</span>
          {deprecated && <Badge kind="warning">{t('deprecated.title')}</Badge>}
        </div>
      </div>
    </Link>
  );
};
