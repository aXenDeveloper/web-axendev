import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

type TabHomeType = {
  icon: IconDefinition;
};

const TabHome: FC<TabHomeType> = ({ children, icon }) => (
  <div className="homeTabs_tab">
    <div className="homeTabs_tab:icon">
      <FontAwesomeIcon icon={icon} />
    </div>
    <span className="homeTabs_tab:title">{children}</span>
  </div>
);

export default TabHome;
