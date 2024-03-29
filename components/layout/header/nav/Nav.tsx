import style from './Nav.module.scss';
import { ItemNav } from './item/ItemNav';
import { useStateNav } from './useStateNav';

export const Nav = () => {
  const state = useStateNav();

  return (
    <nav className={style.wrapper}>
      <ul>
        {state.map(item => (
          <ItemNav key={item.id} {...item} />
        ))}
      </ul>
    </nav>
  );
};
