import Link from 'next/link';
import Image from 'next/image';
import { useDarkTheme } from '../../context/useDarkTheme';
import { DarkThemeContextType } from '../../types/api/contextTypes';

const Logo = () => {
  const { getDarkTheme } = useDarkTheme() as DarkThemeContextType;
  const setLogoSrc = getDarkTheme ? '/assets/logo_light.png' : '/assets/logo_dark.png';

  return (
    <Link href="/">
      <a className="padding:half">
        <Image src={setLogoSrc} alt="Logo aXenDev.net" width={300} height={90} />
      </a>
    </Link>
  );
};

export default Logo;
