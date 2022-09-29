import { faqDataAPIType } from '../../types/api/faqDataAPIType';

const faqDataAPI: faqDataAPIType = [
  {
    id: 1,
    question: {
      en: 'How long does it take to finish an order?',
      pl: 'Ile trwa wykończenie zlecenia?'
    },
    answer: {
      en: 'It depends what the order is, I approach each client individually.',
      pl: 'To zależy jakie to jest zlecenie, do każdego klienta podchodzę indywidualnie.'
    }
  },
  {
    id: 2,
    question: {
      en: 'Do I issue a VAT invoice (PL)?',
      pl: 'Czy wystawiam fakturę VAT (PL)?'
    },
    answer: {
      en: "No, I don't have my own company, so all orders are based on a 'umowę o działo' (PL). I do not exclude that such a possibility may appear in the future.",
      pl: 'Nie, nie posiadam swojej firmy więc wszystkie zlecenia są opartę na umowę o działo. Nie wykluczam że w przyszłości może pojawić się taka możliwość.'
    }
  },
  {
    id: 3,
    question: {
      en: 'Do I require a graphic template for the order?',
      pl: 'Czy do zlecenia wymagam szablonu graficznego?'
    },
    answer: {
      en: "Yes, if you don't have a UI designer, I have a few recommendable designers.",
      pl: 'Tak, jeżeli nie mas UI designera z to mam parę designerów godnych polecenia.'
    }
  },
  {
    id: 4,
    question: {
      en: 'Does it do template coding on IPS Community Suite?',
      pl: 'Czy zajmuje się kodowaniem szablonów na IPS Community Suite?'
    },
    answer: {
      en: 'Yes, from the most basic to the advanced ones.',
      pl: 'Tak, od najbardziej podstawowych po te zaawansowane.'
    }
  }
];

export default faqDataAPI;
