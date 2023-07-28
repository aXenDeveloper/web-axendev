import cx from 'classnames';

import { HeaderSection } from '../header/HeaderSection';
import style from './TechnologyHomeSection.module.scss';

export const TechnologyHomeSection = () => (
  <section className={cx('layout_wrapper', style.wrapper)}>
    <HeaderSection title="Technology" desc="What do I use?" />
  </section>
);
