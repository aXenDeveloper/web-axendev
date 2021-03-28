import Link from 'next/link';
import Image from 'next/image';
import { useDarkTheme } from '../../context/useDarkTheme';
import { DarkThemeContextType } from '../../types/api/contextTypes';
import { FC } from 'react';
import { LogoType } from '../../types/components/layoutTypes';

const Logo: FC<LogoType> = ({ header }) => {
  const { getDarkTheme } = useDarkTheme() as DarkThemeContextType;
  const setLogoSrc = getDarkTheme ? '/assets/logo_light.png' : '/assets/logo_dark.png';

  return (
    <Link href="/">
      <a className={header ? 'header_logo' : ''}>
        <Image
          src={setLogoSrc}
          alt="Logo aXenDev.net"
          width={300}
          height={90}
          objectFit="cover"
          unoptimized
        />
      </a>
    </Link>
  );
};

export default Logo;
