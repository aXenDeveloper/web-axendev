import { useDarkTheme } from '../../context/useDarkTheme';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DarkThemeContextType } from '../../types/api/contextTypes';
import Tippy from '@tippyjs/react';
import useTranslation from 'next-translate/useTranslation';

const DarkButton = () => {
  const { t } = useTranslation('global');
  const { setDarkTheme } = useDarkTheme() as DarkThemeContextType;

  const handleButton = () => {
    const checkDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (!document.body.classList.contains('darkTheme')) {
      document.body.classList.add('darkTheme');
      localStorage.setItem('aXenDev_darkTheme', '1');
      setDarkTheme(true);
    } else {
      document.body.classList.remove('darkTheme');
      localStorage.removeItem('aXenDev_darkTheme');
      setDarkTheme(false);
    }

    localStorage.setItem('aXenDev_darkTheme_manual', '1');
  };

  return (
    <Tippy content={t('button_dark')}>
      <button
        onClick={handleButton}
        className="userBar_button userBar_button_dark"
        aria-label={t('button_dark')}
      >
        <FontAwesomeIcon icon={faMoon} />
      </button>
    </Tippy>
  );
};

export default DarkButton;
