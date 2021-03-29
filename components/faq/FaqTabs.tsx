import { useRouter } from 'next/router';
import { FC } from 'react';
import { FaqTabsType } from '../../types/components/faqTypes';
import FaqTabsItem from './FaqTabsItem';

const FaqTabs: FC<FaqTabsType> = ({ faqListData }) => {
  const { locale } = useRouter();

  return (
    <ul className="faq">
      {faqListData.map(faqItem => {
        const getQuestion = locale === 'pl' ? faqItem.question.pl : faqItem.question.en;
        const getAnswer = locale === 'pl' ? faqItem.answer.pl : faqItem.answer.en;

        return (
          <FaqTabsItem key={faqItem.id} question={getQuestion}>
            {getAnswer}
          </FaqTabsItem>
        );
      })}
    </ul>
  );
};

export default FaqTabs;
