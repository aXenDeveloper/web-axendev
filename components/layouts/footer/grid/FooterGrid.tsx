import FooterGridContact from './FooterGridContact';
import FooterGridFindMe from './FooterGridFindMe';
import FooterGridProducts from './FooterGridProducts';
import FooterGridQuickMenu from './FooterGridQuickMenu';

const FooterGrid = () => {
  return (
    <ul className="footer_grid">
      <FooterGridContact />
      <FooterGridProducts />
      <FooterGridQuickMenu />
      <FooterGridFindMe />
    </ul>
  );
};

export default FooterGrid;
