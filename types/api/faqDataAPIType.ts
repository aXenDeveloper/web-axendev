export type faqDataAPIType = {
  id: number;
  question: {
    en: string;
    pl: string;
  };
  answer: {
    en: string;
    pl: string;
  };
}[];
