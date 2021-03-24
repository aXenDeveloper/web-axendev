import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import CooperationHomeItem from './CooperationHomeItem';

const CooperationHome = () => {
  const { t } = useTranslation('global');

  return (
    <section className="home_section">
      <div className="container container:small">
        <div className="home_section_image">
          <Image
            src="/freepik/home_cooperation.svg"
            objectFit="cover"
            layout="responsive"
            width={470}
            height={450}
            unoptimized
          />
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
