import useTranslation from 'next-translate/useTranslation';
import HomeHeaderSVG from '../SVG/HomeHeaderSVG';

const HeaderHome = () => {
  const { t } = useTranslation('global');

  return (
    <section className="home_section home_top">
      <div className="container">
        <div className="home_section_image">
          <HomeHeaderSVG />
        </div>

        <div className="home_section_contant">
          <h2 className="home_section_contant_title">
            {t('home_do_title_1')} <span className="text:gradient">{t('home_do_title_2')}</span>?
          </h2>

          <p>{t('home_do')}</p>

          <div className="home_section_contant_buttons">ddd</div>
        </div>
      </div>
    </section>
  );
};

export default HeaderHome;
// /assets/header_home.mp4

/*
    <section className="home_top">
      <HomeHeaderSVG />

      <div className="home_top_text">
        {t('home_header_text_amazing')}{' '}
        <span className="text:gradient">{t('home_header_text_projects')}</span>{' '}
        {t('home_header_text_for')}{' '}
        <span className="text:gradient">{t('home_header_text_you')}</span>!
      </div>
    </section>
    */
