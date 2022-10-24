import {
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faPhp,
  faReact
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faCogs,
  faEarthEurope,
  faFlaskVial,
  faPaintBrush,
  faTools
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import SkillsHomeItem from './SkillsHomeItem';

const SkillsHome = () => {
  const { t } = useTranslation('global');

  return (
    <section className="home_skills">
      <div className="container">
        <header className="home_skills_title">
          <h2>{t('home_skills_title')}</h2>
          <p>{t('home_skills_desc')}</p>
        </header>

        <ul className="home_skills_contain">
          <SkillsHomeItem title="Front-end" icon={faPaintBrush} highlight>
            <li className="home_skills_contain_list_highlight">
              <FontAwesomeIcon icon={faJs} />
              <span>JavaScript</span>
            </li>

            <li className="home_skills_contain_list_highlight">
              <FontAwesomeIcon icon={faReact} />
              <span>React (NextJS)</span>
            </li>

            <li className="home_skills_contain_list_highlight">
              <FontAwesomeIcon icon={faHtml5} />
              <span>HTML</span>
            </li>

            <li className="home_skills_contain_list_highlight">
              <FontAwesomeIcon icon={faCss3} />
              <span>CSS / SASS</span>
            </li>

            <li>TypeScript</li>
            <li>React Native</li>
            <li>UX / UI</li>
          </SkillsHomeItem>

          <SkillsHomeItem title="Back-end" icon={faCogs}>
            <li className="home_skills_contain_list_highlight">
              <FontAwesomeIcon icon={faPhp} />
              <span>PHP</span>
            </li>

            <li className="home_skills_contain_list_highlight">
              <FontAwesomeIcon icon={faNodeJs} />
              <span>NodeJS</span>
            </li>

            <li>NestJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>MySQL / MariaDB</li>
            <li>PostgreSQL</li>
            <li>REST/GraphQL APIs</li>
            <li>C#</li>
          </SkillsHomeItem>

          <SkillsHomeItem title={t('home_skills_tools')} icon={faTools}>
            <li className="home_skills_contain_list_highlight">
              <FontAwesomeIcon icon={faGithub} />
              <span>Git</span>
            </li>

            <li className="home_skills_contain_list_highlight">
              <FontAwesomeIcon icon={faCode} />
              <span>VS Code</span>
            </li>

            <li>IPS Community Suite</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Figma</li>
            <li>Webpack</li>
            <li>ESLint</li>
          </SkillsHomeItem>

          <SkillsHomeItem title={t('home_skills_test')} icon={faFlaskVial}>
            <li className="home_skills_contain_list_highlight">
              <FontAwesomeIcon icon={faReact} />
              <span>React Testing Library</span>
            </li>

            <li className="home_skills_contain_list_highlight">
              <FontAwesomeIcon icon={faEarthEurope} />
              <span>SEO</span>
            </li>

            <li>Jest</li>
            <li>Cypress</li>
            <li>Lighthouse</li>
            <li>PageSpeed Insight</li>
            <li>BrowserStack</li>
            <li>Validator W3C</li>
          </SkillsHomeItem>
        </ul>
      </div>
    </section>
  );
};

export default SkillsHome;
