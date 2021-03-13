import { faAward, faCogs, faUsers, faVial } from '@fortawesome/free-solid-svg-icons';
import TabHome from './TabHome';

const TabsHome = () => {
  return (
    <section className="homeTabs padding">
      <TabHome title="Wysoka jakość" icon={faAward}>
        Najnowsze standardy SEO
      </TabHome>

      <TabHome title="Szybkość działania" icon={faCogs}>
        Maksymalna optymalizacja
      </TabHome>

      <TabHome title="Zgodne z UX" icon={faUsers}>
        Najważniejsi użytkownicy
      </TabHome>

      <TabHome title="Testowanie" icon={faVial}>
        Minimalna ilość błędów
      </TabHome>
    </section>
  );
};

export default TabsHome;
