import Tippy from '@tippyjs/react';
import useTranslation from 'next-translate/useTranslation';
import FooterCopyright from './footer/FooterCopyright';
import FooterGrid from './footer/grid/FooterGrid';

const Footer = () => {
  const { t } = useTranslation('global');

  return (
    <footer className="footer">
      <div className="container">
        <FooterGrid />
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
