import Tippy from '@tippyjs/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const FooterCopyright = () => {
  const { t } = useTranslation('global');
  const { asPath } = useRouter();

  return (
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
        <a
          href="https://nextjs.org/"
          target="blank"
          rel="noopener nofollow"
          className="text:color text_weight:700"
        >
          NextJS
        </a>
      </span>

      {asPath === '/' && (
        <span>
          Illustration by{' '}
          <a
            href="https://storyset.com/web"
            target="blank"
            rel="noopener nofollow"
            className="text:color text_weight:700"
          >
            Freepik Storyset
          </a>
        </span>
      )}
    </div>
  );
};

export default FooterCopyright;
