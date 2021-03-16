import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DarkThemeContextType } from '../../context/contextTypes';
import { useDarkTheme } from '../../context/useDarkTheme';

const DarkButton = () => {
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
    <button onClick={handleButton} className="userBar_button userBar_button_dark">
      <FontAwesomeIcon icon={faMoon} />
    </button>
  );
};

export default DarkButton;
