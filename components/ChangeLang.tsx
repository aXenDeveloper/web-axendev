import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Cookies from 'js-cookie';
import Tippy from '@tippyjs/react';

const ChangeLang = () => {
  const { asPath } = useRouter();

  const handleChangeLang = (lang: string) => {
    Cookies.set('NEXT_LOCALE', lang, { expires: 365 });
  };

  return (
    <ul className="userBar_lang">
      <li>
        <Tippy content={'Polish (PL)'}>
          <span className="userBar_lang_item">
            <Link href={asPath} locale="pl">
              <a onClick={() => handleChangeLang('pl')}>
                <Image src="/flags/pl.png" width={40} height={25} alt="Polish (PL)" />
              </a>
            </Link>
          </span>
        </Tippy>
      </li>

      <li>
        <Tippy content={'English (USA)'}>
          <span className="userBar_lang_item">
            <Link href={asPath} locale="en">
              <a onClick={() => handleChangeLang('en')}>
                <Image src="/flags/us.png" width={40} height={25} alt="English (USA)" />
              </a>
            </Link>
          </span>
        </Tippy>
      </li>
    </ul>
  );
};

export default ChangeLang;
