import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';
import { SkillsHomeItemType } from '../../types/components/homeTypes';

interface Props extends SkillsHomeItemType {
  children: ReactNode;
}

const SkillsHomeItem = ({ children, title, highlight, icon }: Props) => (
  <li
    className={`home_skills_contain_item${highlight ? ' home_skills_contain_item:highlight' : ''}`}
  >
    <article>
      <header className="home_skills_contain_header">
        <FontAwesomeIcon icon={icon} />
        <h3>{title}</h3>
      </header>

      <ul className="home_skills_contain_list">{children}</ul>
    </article>
  </li>
);

export default SkillsHomeItem;
