import cx from 'classnames';
import { useTranslations } from 'next-intl';

import { ProductsInterface } from '../configProducts';
import style from './ProductView.module.scss';
import { BackLinkProduct } from './backLink/BackLinkProduct';

export const ProductView = ({ id, name }: ProductsInterface) => {
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
      </aside>

      <article>ProductView</article>
    </div>
  );
};
