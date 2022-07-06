import useTranslation from 'next-translate/useTranslation';
import { CooperationHomeItemType } from '../../../types/components/homeTypes';

const CooperationHomeItem = ({ number }: CooperationHomeItemType) => {
  const { t } = useTranslation('global');

  return (
    <li className="home_section_contant_cooperation_item">
      <div className="home_section_contant_cooperation_item:number">
        <span>{number}</span>
      </div>
      <div className="home_section_contant_cooperation_item:content">
        <h3>{t(`home_cooperation_list_title_${number}`)}</h3>
        <p>{t(`home_cooperation_list_${number}`)}</p>
      </div>
    </li>
  );
};

export default CooperationHomeItem;
