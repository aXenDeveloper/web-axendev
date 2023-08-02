import { TwitterIcon } from '@/assets/socials/TwitterIcon';
import style from './SocialsFooter.module.scss';
import { GithubIcon } from '@/assets/socials/GithubIcon';

export const SocialFooter = () => (
  <ul className={style.wrapper}>
    <li>
      <a
        href="https://github.com/aXenDeveloper"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
      >
        <GithubIcon />
      </a>
    </li>

    <li>
      <a
        href="https://x.com/aXenDeveloper"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
      >
        <TwitterIcon />
      </a>
    </li>
  </ul>
);
