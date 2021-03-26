import useTranslation from 'next-translate/useTranslation';

const HeaderHome = () => {
  const { t } = useTranslation('global');

  return (
    <section className="home_top">
      <div className="home_top_text">
        {t('home_header_text_amazing')}{' '}
        <span className="text:gradient">{t('home_header_text_projects')}</span>{' '}
        {t('home_header_text_for')}{' '}
        <span className="text:gradient">{t('home_header_text_you')}</span>!
      </div>
    </section>
  );
};

export default HeaderHome;
// /assets/header_home.mp4
