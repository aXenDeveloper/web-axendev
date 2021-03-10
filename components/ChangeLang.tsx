import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ChangeLang = () => {
  const { asPath } = useRouter();

  const handleChangeLang = (lang: string) => {
    Cookies.set('NEXT_LOCALE', lang);
  };

  return (
    <ul className="userBar_lang">
      <li>
        <Link href={asPath} locale="en">
          <a onClick={() => handleChangeLang('en')}>
            <Image src="/flags/us.png" width={40} height={25} />
          </a>
        </Link>
      </li>

      <li>
        <Link href={asPath} locale="pl">
          <a onClick={() => handleChangeLang('pl')}>
            <Image src="/flags/pl.png" width={40} height={25} />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default ChangeLang;
