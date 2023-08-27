import style from './HomeView.module.scss';
import { MainHomeSection } from './sections/main/MainHomeSection';
import { LastProductsHomeSection } from './sections/lastProducts/LastProductsHomeSection';
import { ReviewsHomeSection } from './sections/reviews/ReviewsHomeSection';
import { AboutHomeSection } from './sections/about/AboutHomeSection';
import { TechnologiesHomeSection } from './sections/technology/TechnologiesHomeSection';
import { FaqHomeSection } from './sections/faq/FaqHomeSection';

interface Props {
  oneUSDtoPLN: number | undefined;
}

export const HomeView = ({ oneUSDtoPLN }: Props) => (
  <div className={style.wrapper}>
    <MainHomeSection />
    <LastProductsHomeSection oneUSDtoPLN={oneUSDtoPLN} />
    <AboutHomeSection />
    <TechnologiesHomeSection />
    <FaqHomeSection />
    <ReviewsHomeSection />
  </div>
);
