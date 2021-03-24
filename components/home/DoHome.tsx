import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

const DoHome = () => {
  const { t } = useTranslation('global');

  return (
    <section className="home_section">
      <div className="container container:small">
        <div className="home_section_contant">
          <h2 className="home_section_contant_title">
            {t('home_do_title_1')} <span className="text:gradient">{t('home_do_title_2')}</span>?
          </h2>

          <p>{t('home_do')}</p>
        </div>

        <div className="home_section_image">
          <Image
            src="/freepik/home_do.svg"
            objectFit="cover"
            layout="responsive"
            width={470}
            height={420}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default DoHome;
