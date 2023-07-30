import cx from 'classnames';

import style from './QuestionsHomeSection.module.scss';
import { BackgroundSVG } from '@/assets/background/BackgroundSVG';

export const QuestionsHomeSection = () => {
  return (
    <section className={style.main}>
      <div className={cx('layout_wrapper', style.wrapper)}>
        <BackgroundSVG />
        QuestionsHomeSection
      </div>
    </section>
  );
};
