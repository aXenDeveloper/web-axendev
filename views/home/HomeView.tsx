import style from './HomeView.module.scss';
import { MainHomeSection } from './sections/main/MainHomeSection';
import { LastProductsHomeSection } from './sections/lastProducts/LastProductsHomeSection';
import { ReviewsHomeSection } from './sections/reviews/ReviewsHomeSection';
import { AboutHomeSection } from './sections/about/AboutHomeSection';
import { TechnologiesHomeSection } from './sections/technology/TechnologiesHomeSection';
import { FaqHomeSection } from './sections/faq/FaqHomeSection';

export const HomeView = () => (
  <div className={style.wrapper}>
    <MainHomeSection />
    <LastProductsHomeSection />
    <AboutHomeSection />
    <TechnologiesHomeSection />
    <FaqHomeSection />
    <ReviewsHomeSection />
  </div>
);
