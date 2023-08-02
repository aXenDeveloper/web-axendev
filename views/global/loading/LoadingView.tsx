import { Loader } from '@/components/loader/Loader';
import style from './LoadingView.module.scss';

export const LoadingView = () => (
  <div className={style.wrapper}>
    <Loader />
  </div>
);
