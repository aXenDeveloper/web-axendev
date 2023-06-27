import Link from 'next-intl/link';

export const SwitchLangs = () => {
  return (
    <ul>
      <li>
        <Link href="/" locale="en">
          English
        </Link>
      </li>

      <li>
        <Link href="/" locale="pl">
          Polish
        </Link>
      </li>
    </ul>
  );
};
