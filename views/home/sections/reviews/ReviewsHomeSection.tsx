import cx from 'classnames';
import { useTranslations } from 'next-intl';

import style from './ReviewsHomeSection.module.scss';
import { ItemReviewsHomeSection } from './item/ItemReviewsHomeSection';

const reviews = [
  {
    id: '1',
    name: 'AmericanRev2',
    productId: 'ips-theme-fluent-design',
    from: {
      name: 'Invision Community Marketplace',
      href: 'https://invisioncommunity.com/files/file/9539-dark-light-fluent-design-theme-edition/?do=findReview&review=12915'
    }
  },
  {
    id: '2',
    name: 'Varro',
    productId: 'ips-app-advanced-serverlist',
    from: {
      name: 'Invision Community Marketplace',
      href: 'https://invisioncommunity.com/files/file/9852-axen-advanced-server-list/?do=findReview&review=13579'
    }
  },
  {
    id: '3',
    name: 'hashbrown',
    productId: 'ips-theme-dynamic',
    from: {
      name: 'Invision Community Marketplace',
      href: 'https://invisioncommunity.com/files/file/9882-dynamic-theme/?do=findReview&review=13607'
    }
  },
  {
    id: '4',
    name: 'chrisg0227',
    productId: 'ips-theme-fluent-design',
    from: {
      name: 'Invision Community Marketplace',
      href: 'https://invisioncommunity.com/files/file/9539-dark-light-fluent-design-theme-edition/?do=findReview&review=12914'
    }
  },
  {
    id: '5',
    name: 'Joey_M',
    productId: 'ips-secondary-groups-indicator',
    from: {
      name: 'Invision Community Marketplace',
      href: 'https://invisioncommunity.com/files/file/8760-axen-secondary-groups-indicator/?do=findReview&review=13850'
    }
  },
  {
    id: '6',
    name: 'bosss',
    productId: 'ips-theme-fluent-design',
    from: {
      name: 'Invision Community Marketplace',
      href: 'https://invisioncommunity.com/files/file/9539-dark-light-fluent-design-theme-edition/?do=findReview&review=13113'
    }
  }
];

export const ReviewsHomeSection = () => {
  const t = useTranslations('home');

  return (
    <section className={cx('layout_wrapper', style.wrapper)}>
      <div className={style.header}>
        <h2>{t('reviews.title')}</h2>
        <span>{t('reviews.desc')}</span>
      </div>

      <div className={style.content}>
        <div>
          {reviews.slice(0, 2).map(item => (
            <ItemReviewsHomeSection key={item.id} {...item} />
          ))}
        </div>

        <div>
          {reviews.slice(2, 4).map(item => (
            <ItemReviewsHomeSection key={item.id} {...item} />
          ))}
        </div>

        <div>
          {reviews.slice(4, 6).map(item => (
            <ItemReviewsHomeSection key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
