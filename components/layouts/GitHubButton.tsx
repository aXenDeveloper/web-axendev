import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import useTranslation from 'next-translate/useTranslation';

const GitHubButton = () => {
  const { t } = useTranslation('global');

  return (
    <Tippy content={t('button_github_tooltip')}>
      <a
        href="https://github.com/aXenDeveloper"
        className="button button_big button_primary"
        target="blank"
        rel="noopener"
      >
        <span>
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </span>
      </a>
    </Tippy>
  );
};

export default GitHubButton;
