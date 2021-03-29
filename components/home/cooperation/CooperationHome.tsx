import useTranslation from 'next-translate/useTranslation';
import HomeCooperationSVG from '../../SVG/HomeCooperationSVG';
import CooperationHomeItem from './CooperationHomeItem';

const CooperationHome = () => {
  const { t } = useTranslation('global');

  return (
    <section className="home_section home_section:background">
      <div className="container container:medium">
        <div className="home_section_image">
          <HomeCooperationSVG />
        </div>

        <div className="home_section_contant">
          <h2 className="home_section_contant_title">
            {t('home_cooperation_title_1')}{' '}
            <span className="text:gradient">{t('home_cooperation_title_2')}</span>
            {t('home_cooperation_title_3')}?
          </h2>

          <ul className="home_section_contant_cooperation">
            <CooperationHomeItem number={1} />
            <CooperationHomeItem number={2} />
            <CooperationHomeItem number={3} />
            <CooperationHomeItem number={4} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CooperationHome;
