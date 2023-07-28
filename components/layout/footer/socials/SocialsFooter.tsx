import { TwitterIcon } from '@/assets/socials/TwitterIcon';
import style from './SocialsFooter.module.scss';
import { GithubIcon } from '@/assets/socials/GithubIcon';

export const SocialFooter = () => (
  <ul className={style.wrapper}>
    <li>
      <a href="https://github.com/aXenDeveloper" target="_blank" rel="noopener noreferrer">
        <GithubIcon />
      </a>
    </li>

    <li>
      <a href="https://twitter.com/aXenDeveloper" target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
      </a>
    </li>
  </ul>
);
