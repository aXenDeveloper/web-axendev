import useTranslation from 'next-translate/useTranslation';

const HeaderHome = () => {
  const { t } = useTranslation('global');

  return (
    <section className="homeTop">
      <div className="container">
        <h1 className="homeTop_text">
          {t('home_header_text_amazing')}{' '}
          <span className="text-weight:bold text:color">{t('home_header_text_projects')}</span> {t('home_header_text_for')}{' '}
          <span className="text-weight:bold text:color">{t('home_header_text_you')}</span>!
        </h1>
      </div>
    </section>
  );
};

export default HeaderHome;
