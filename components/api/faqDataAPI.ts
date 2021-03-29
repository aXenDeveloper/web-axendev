import { faqDataAPIType } from '../../types/api/faqDataAPIType';

const faqDataAPI: faqDataAPIType = [
  {
    id: 1,
    question: {
      en: 'This is test title for faq item',
      pl: 'PL This is test title for faq item'
    },
    answer: {
      en:
        "en Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      pl:
        "pl Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  }
];

export default faqDataAPI;
