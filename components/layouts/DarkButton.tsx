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
    if (!localStorage.getItem('darkTheme')) {
      document.body.classList.add('darkTheme');
      localStorage.setItem('darkTheme', '1');
      setDarkTheme(true);
    } else {
      document.body.classList.remove('darkTheme');
      localStorage.removeItem('darkTheme');
      setDarkTheme(false);
    }
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
