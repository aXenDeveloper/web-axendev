'use client';

import { useTranslations } from 'next-intl';
import { ShoppingBag24Filled } from '@fluentui/react-icons';

import style from './LinksProduct.module.scss';
import { Button } from '@/components/button/Button';

import { LinksProductsInterface } from '../../configProducts';

interface Props {
  links: LinksProductsInterface;
  price: number;
}

export const LinksProduct = ({ links, price }: Props) => {
  const t = useTranslations('products');

  if (!links.demo && !links.github && !links.ipsMarketplace) return null;

  return (
    <div className={style.wrapper}>
      {links.github && (
        <Button id="github" href={links.github} externalLink>
          GitHub
        </Button>
      )}
      {links.ipsMarketplace && (
        <Button
          id="ipsMarketplace"
          href={links.ipsMarketplace}
          kind={links.github ? 'secondary' : 'primary'}
          externalLink
        >
          {price ? (
            <>
              <ShoppingBag24Filled /> {t('buy_now_on', { name: 'IPS Marketplace' })}
            </>
          ) : (
            'IPS Marketplace'
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
