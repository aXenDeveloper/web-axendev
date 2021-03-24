import {
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faPhp,
  faReact
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faCogs, faPaintBrush, faTools } from '@fortawesome/free-solid-svg-icons';
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
          <SkillsHomeItem title="Back-end" icon={faCogs}>
            <li className="home_skills_contain_list_highlight">
              <FontAwesomeIcon icon={faPhp} />
              <span>PHP</span>
            </li>

            <li className="home_skills_contain_list_highlight">
              <FontAwesomeIcon icon={faNodeJs} />
              <span>NodeJS</span>
            </li>

            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>MySQL / MariaDB</li>
            <li>C#</li>
          </SkillsHomeItem>

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
            <li>Jest</li>
          </SkillsHomeItem>

          <SkillsHomeItem title="Tools" icon={faTools}>
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
            <li>Webpack</li>
          </SkillsHomeItem>
        </ul>
      </div>
    </section>
  );
};

export default SkillsHome;
