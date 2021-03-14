import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <Link href="/">
    <a className="padding:half">
      <Image src="/assets/logo_dark.png" alt="Logo aXenDev.net" width={300} height={90} />
    </a>
  </Link>
);

export default Logo;
