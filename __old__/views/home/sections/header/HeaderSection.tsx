import style from './HeaderSection.module.scss';

interface Props {
  desc: string;
  title: string;
}

export const HeaderSection = ({ desc, title }: Props) => (
  <div className={style.header}>
    <h2>{title}</h2>
    <span>{desc}</span>
  </div>
);
