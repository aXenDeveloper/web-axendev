import cx from 'classnames';
import { useTranslations } from 'next-intl';

import { HeaderSection } from '../header/HeaderSection';
import style from './TechnologiesHomeSection.module.scss';
import { NextJSIcon } from '@/assets/technologies/NextJSIcon';

import { Tooltip } from '../../../../components/tooltip/Tooltip';
import { NestJSIcon } from '../../../../assets/technologies/NestJSIcon';
import { TypescriptIcon } from '../../../../assets/technologies/TypescriptIcon';
import { PhpIcon } from '../../../../assets/technologies/PhpIcon';
import { ReactIcon } from '../../../../assets/technologies/ReactIocn';
import { NodeJSIcon } from '../../../../assets/technologies/NodeJSIcon';
import { VitestIcon } from '../../../../assets/technologies/VitestIcon';
import { PlaywrightIcon } from '../../../../assets/technologies/PlaywrightIcon';
import { FigmaIcon } from '../../../../assets/technologies/FigmaIcon';
import { ScssIcon } from '../../../../assets/technologies/ScssIcon';

export const TechnologiesHomeSection = () => {
  const t = useTranslations('home');

  return (
    <section className={cx('layout_wrapper', style.wrapper)}>
      <HeaderSection title={t('technologies.title')} desc={t('technologies.desc')} />

      <ul className={style.list}>
        <li>
          <Tooltip content="NextJS">
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NextJS"
            >
              <NextJSIcon />
            </a>
          </Tooltip>
        </li>

        <li>
          <Tooltip content="NestJS">
            <a
              href="https://nestjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NestJS"
            >
              <NestJSIcon />
            </a>
          </Tooltip>
        </li>

        <li>
          <Tooltip content="Typescript">
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Typescript"
            >
              <TypescriptIcon />
            </a>
          </Tooltip>
        </li>

        <li>
          <Tooltip content="PHP">
            <a
              href="https://www.php.net/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PHP"
            >
              <PhpIcon />
            </a>
          </Tooltip>
        </li>

        <li>
          <Tooltip content="React / React Native">
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="React / React Native"
            >
              <ReactIcon />
            </a>
          </Tooltip>
        </li>

        <li>
          <Tooltip content="NodeJS">
            <a
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NodeJS"
            >
              <NodeJSIcon />
            </a>
          </Tooltip>
        </li>

        <li>
          <Tooltip content="SCSS">
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SCSS"
            >
              <ScssIcon />
            </a>
          </Tooltip>
        </li>

        <li>
          <Tooltip content="Vitest">
            <a
              href="https://vitest.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vitest"
            >
              <VitestIcon />
            </a>
          </Tooltip>
        </li>

        <li>
          <Tooltip content="Playwright">
            <a
              href="https://playwright.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Playwright"
            >
              <PlaywrightIcon />
            </a>
          </Tooltip>
        </li>

        <li>
          <Tooltip content="Figma">
            <a
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Figma"
            >
              <FigmaIcon />
            </a>
          </Tooltip>
        </li>
      </ul>
    </section>
  );
};
