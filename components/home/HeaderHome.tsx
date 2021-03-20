import useTranslation from 'next-translate/useTranslation';

const HeaderHome = () => {
  const { t } = useTranslation('global');

  return (
    <section className="home_top">
      <video autoPlay muted loop className="home_top_video">
        <source src="/assets/header_home.mp4" />
      </video>

      <div className="home_top_text">
        {t('home_header_text_amazing')} <span className="text:color">{t('home_header_text_projects')}</span>{' '}
        {t('home_header_text_for')} <span className="text:color">{t('home_header_text_you')}</span>!
      </div>
    </section>
  );
};

export default HeaderHome;
