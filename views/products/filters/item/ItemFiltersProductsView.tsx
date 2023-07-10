interface Props {
  name: string;
}

export const ItemFiltersProductsView = ({ name }: Props) => {
  return (
    <li>
      <label tabIndex={1}>{name}</label>
    </li>
  );
};
