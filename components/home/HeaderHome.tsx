import useTranslation from 'next-translate/useTranslation';

const HeaderHome = () => {
  const { t } = useTranslation('global');

  return (
    <section className="homeTop">
      <video autoPlay muted loop className="homeTop_video">
        <source src="/assets/header_home.mp4" />
      </video>

      <div className="homeTop_text">
        {t('home_header_text_amazing')} <span className="text:color">{t('home_header_text_projects')}</span>{' '}
        {t('home_header_text_for')} <span className="text:color">{t('home_header_text_you')}</span>!
      </div>
    </section>
  );
};

export default HeaderHome;
