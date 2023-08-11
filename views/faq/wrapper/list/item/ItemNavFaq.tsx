import Link from 'next-intl/link';

export interface ItemNavFaqType {
  id: string;
  url: string;
}

export interface ItemsNavFaqType extends ItemNavFaqType {
  children: ItemNavFaqType[];
}

export const ItemNavFaq = ({ id, url }: ItemsNavFaqType) => {
  return (
    <div>
      <Link href={url}>ItemNavFaq - {id}</Link>
    </div>
  );
};
