import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';
import { FaqTabsItemType } from '../../types/components/faqTypes';
import { Collapse } from 'react-collapse';

const FaqTabsItem: FC<FaqTabsItemType> = ({ children, question }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`faq_item`}>
      <div className="faq_item_header" onClick={handleClickItem}>
        <h2 className="faq_item_header:question">{question}</h2>

        <button className={`faq_item_header:svg${isOpen ? ' open' : ''}`}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>

      <Collapse isOpened={isOpen}>
        <div className="faq_item_answer">{children}</div>
      </Collapse>
    </li>
  );
};

export default FaqTabsItem;
