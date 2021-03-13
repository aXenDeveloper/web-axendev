import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

type TabHomeType = {
  icon: IconDefinition;
  title: string;
};

const TabHome: FC<TabHomeType> = ({ children, icon, title }) => (
  <div className="homeTabs_tab">
    <div className="homeTabs_tab:icon">
      <FontAwesomeIcon icon={icon} />
    </div>
    <h2 className="homeTabs_tab:title">{title}</h2>
    <p className="homeTabs_tab:content">{children}</p>
  </div>
);

export default TabHome;
