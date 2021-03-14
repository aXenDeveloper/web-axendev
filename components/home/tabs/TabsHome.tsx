import { faAward, faCogs, faUsers, faVial } from '@fortawesome/free-solid-svg-icons';
import TabHome from './TabHome';

const TabsHome = () => {
  return (
    <section className="homeTabs padding">
      <TabHome icon={faAward}>Jakość</TabHome>

      <TabHome icon={faCogs}>Optymalizacja</TabHome>

      <TabHome icon={faUsers}>UX / UI</TabHome>

      <TabHome icon={faVial}>Testy</TabHome>
    </section>
  );
};

export default TabsHome;
