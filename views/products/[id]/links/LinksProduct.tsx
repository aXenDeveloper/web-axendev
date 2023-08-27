'use client';

import { useTranslations } from 'next-intl';
import { ShoppingBag24Filled } from '@fluentui/react-icons';

import style from './LinksProduct.module.scss';
import { Button } from '@/components/button/Button';

import { LinksProductsInterface } from '../../productsData';

interface Props {
  links: LinksProductsInterface;
  price: number;
}

export const LinksProduct = ({ links, price }: Props) => {
  const t = useTranslations('products');

  if (!links.demo && !links.github && !links.invisionize) return null;

  return (
    <div className={style.wrapper}>
      {links.github && (
        <Button id="github" href={links.github} externalLink>
          GitHub
        </Button>
      )}
      {links.invisionize && (
        <Button
          id="invisionize"
          href={links.invisionize}
          kind={links.github ? 'secondary' : 'primary'}
          externalLink
        >
          {price ? (
            <>
              <ShoppingBag24Filled /> {t('buy_now_on', { name: 'Invisionize' })}
            </>
          ) : (
            'Invisionize'
          )}
        </Button>
      )}
      {links.demo && (
        <Button id="demo" href={links.demo} kind="secondary" externalLink>
          Demo
        </Button>
      )}
    </div>
  );
};
