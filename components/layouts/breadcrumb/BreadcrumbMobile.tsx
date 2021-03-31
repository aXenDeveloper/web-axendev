import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const BreadcrumbMobile = () => {
  const { t } = useTranslation('global');
  const { back } = useRouter();

  return (
    <button onClick={back} className="breadcrumb_mobile responsive_show:mobile">
      <FontAwesomeIcon icon={faChevronLeft} />
      {t('breadcrumb_mobile_button')}
    </button>
  );
};

export default BreadcrumbMobile;
