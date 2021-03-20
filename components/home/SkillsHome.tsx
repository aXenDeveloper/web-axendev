import { faCogs, faPaintBrush, faTools } from '@fortawesome/free-solid-svg-icons';
import SkillsHomeItem from './SkillsHomeItem';

const SkillsHome = () => {
  return (
    <section className="home_skills">
      <div className="container">
        <header className="home_skills_title">
          <h2>Skills</h2>
          <p>Test something desc section</p>
        </header>

        <ul className="home_skills_contain">
          <SkillsHomeItem title="Back-end" icon={faCogs}>
            <li>C#</li>
          </SkillsHomeItem>

          <SkillsHomeItem title="Front-end" icon={faPaintBrush} highlight>
            <li>HTML</li>
            <li>CSS / SASS</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS / SASS</li>
            <li>JavaScript</li>
          </SkillsHomeItem>

          <SkillsHomeItem title="Tools" icon={faTools}>
            <li>VS Code</li>
          </SkillsHomeItem>
        </ul>
      </div>
    </section>
  );
};

export default SkillsHome;
