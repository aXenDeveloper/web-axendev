import FooterGridContact from './FooterGridContact';
import FooterGridFindMe from './FooterGridFindMe';

const FooterGrid = () => {
  return (
    <ul className="footer_grid">
      <FooterGridContact />
      <FooterGridFindMe />

      <li className="footer_grid_item">test</li>
      <li className="footer_grid_item">test</li>
    </ul>
  );
};

export default FooterGrid;
