import Tippy from '@tippyjs/react';
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  const { t } = useTranslation('global');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_copyright">
          <span>
            {t('footer_copyright')} ©{' '}
            <Tippy content={<span>{t('footer_copyright_github')}</span>}>
              <a
                href="https://github.com/aXenDeveloper/web-axendev"
                target="blank"
                rel="noopener nofollow"
                className="text:color text_weight:700"
              >
                aXenDev.net
              </a>
            </Tippy>{' '}
            2019 - 2021
          </span>

          <span>
            {t('footer_powered_by')}{' '}
            <a href="https://nextjs.org/" target="blank" rel="noopener nofollow" className="text:color text_weight:700">
              NextJS
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
