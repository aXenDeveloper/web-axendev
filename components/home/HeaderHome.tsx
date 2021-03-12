import useTranslation from 'next-translate/useTranslation';

const HeaderHome = () => {
  const { t } = useTranslation('global');

  return (
    <section className="homeTop">
      <div className="container">
        <div className="homeTop_text">
          <span>
            {t('home_header_text_amazing')}{' '}
            <span className="text_weight:bold text:color">{t('home_header_text_projects')}</span> {t('home_header_text_for')}{' '}
            <span className="text_weight:bold text:color">{t('home_header_text_you')}</span>!
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeaderHome;
