export enum CategoriesProductEnum {
  NODE_JS = 'node_js',
  REACT = 'react',
  REACT_NATIVE = 'react_native',
  TYPESCRIPT = 'typescript',
  IPS_APPS = 'ips_apps',
  IPS_THEMES = 'ips_themes',
  IPS_TRANSLATIONS = 'ips_translations',
  OTHERS = 'others'
}

interface ProductsInterface {
  categories: CategoriesProductEnum[];
  createdAt: number;
  id: string;
  imgs: string[];
  links: {
    demo?: string;
    github?: string;
    ipsMarketplace?: string;
  };
  name: string;
  price: number;
  deprecated?: boolean;
}

export const products: ProductsInterface[] = [
  {
    id: 'ips-secondary-groups-indicator',
    name: 'Secondary Groups Indicator',
    categories: [CategoriesProductEnum.IPS_APPS],
    imgs: [
      'https://raw.githubusercontent.com/aXenDeveloper/ips-secondary-groups-indicator/master/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-secondary-groups-indicator/master/2.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-secondary-groups-indicator/master/3.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-secondary-groups-indicator/master/4.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-secondary-groups-indicator/master/5.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-secondary-groups-indicator',
      ipsMarketplace:
        'https://invisioncommunity.com/files/file/8760-axen-secondary-groups-indicator/'
    },
    price: 0,
    createdAt: 1507481315
  },
  {
    id: 'ips-number-of-entries-chatbox',
    name: 'Number of entries Chatbox Free',
    categories: [CategoriesProductEnum.IPS_APPS],
    imgs: [
      'https://raw.githubusercontent.com/aXenDeveloper/ips-number-of-entries-chatbox/main/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-number-of-entries-chatbox/main/2.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-number-of-entries-chatbox/main/3.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-number-of-entries-chatbox',
      ipsMarketplace:
        'https://invisioncommunity.com/files/file/8761-axen-number-of-entries-chatbox-free/'
    },
    price: 0,
    createdAt: 1507481316,
    deprecated: true
  },
  {
    id: 'ips-group-formatting-in-mention',
    name: 'Group formatting in mention',
    categories: [CategoriesProductEnum.IPS_APPS],
    imgs: [
      'https://raw.githubusercontent.com/aXenDeveloper/ips-group-formatting-in-mention/master/1.png'
    ],
    links: {
      github:
        'https://github.com/aXenDeveloper/ips-group-formatting-in-mention',
      ipsMarketplace:
        'https://invisioncommunity.com/files/file/9273-axen-group-formatting-in-mention/'
    },
    price: 0,
    createdAt: 1548092915
  },
  {
    id: 'ips-fontawesome5',
    name: 'Font Awesome 5 in IPS',
    categories: [CategoriesProductEnum.IPS_APPS],
    imgs: ['https://files.axendev.net/projects/ips/plugins/fontawesome5/1.png'],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-fontawesome5',
      ipsMarketplace:
        'https://invisioncommunity.com/files/file/9439-axen-font-awesome-5-in-ips/'
    },
    price: 0,
    createdAt: 1562777315,
    deprecated: true
  },
  {
    id: 'ips-article-system-in-pages',
    name: 'Article System in Pages',
    categories: [CategoriesProductEnum.IPS_APPS],
    imgs: [
      'https://files.axendev.net/projects/ips/plugins/articlesystem/1.png',
      'https://files.axendev.net/projects/ips/plugins/articlesystem/2.png',
      'https://files.axendev.net/projects/ips/plugins/articlesystem/3.png',
      'https://files.axendev.net/projects/ips/plugins/articlesystem/4.png',
      'https://files.axendev.net/projects/ips/plugins/articlesystem/5.png',
      'https://files.axendev.net/projects/ips/plugins/articlesystem/6.png',
      'https://files.axendev.net/projects/ips/plugins/articlesystem/7.png'
    ],
    links: {
      ipsMarketplace:
        'https://invisioncommunity.com/files/file/9490-axen-article-system-in-pages/',
      demo: 'https://1shot2kill.pl/portal/'
    },
    price: 10,
    createdAt: 1567097315
  },
  {
    id: 'ips-administrative-bar',
    name: 'Administrative bar',
    categories: [CategoriesProductEnum.IPS_APPS],
    imgs: [
      'https://raw.githubusercontent.com/aXenDeveloper/ips-administrative-bar/master/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-administrative-bar/master/2.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-administrative-bar',
      ipsMarketplace:
        'https://invisioncommunity.com/files/file/9497-axen-administrative-bar/'
    },
    price: 0,
    createdAt: 1653842915
  },
  {
    id: 'ips-lang-polish-chatbox-plus',
    name: '(BIM) Chatbox+ - Polish translation',
    categories: [CategoriesProductEnum.IPS_TRANSLATIONS],
    imgs: ['https://files.axendev.net/projects/ips/langs/chatbox+/1.png'],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-lang-polish-chatbox-plus'
    },
    price: 0,
    createdAt: 1666889315
  },
  {
    id: 'ips-theme-fluent-design',
    name: 'Fluent Design Theme Edition',
    categories: [CategoriesProductEnum.IPS_THEMES],
    imgs: [
      'https://files.axendev.net/projects/ips/themes/fluent/fluent.gif',
      'https://files.axendev.net/projects/ips/themes/fluent/1.png',
      'https://files.axendev.net/projects/ips/themes/fluent/2.png',
      'https://files.axendev.net/projects/ips/themes/fluent/3.png',
      'https://files.axendev.net/projects/ips/themes/fluent/4.png',
      'https://files.axendev.net/projects/ips/themes/fluent/5.png',
      'https://files.axendev.net/projects/ips/themes/fluent/6.png',
      'https://files.axendev.net/projects/ips/themes/fluent/7.png',
      'https://files.axendev.net/projects/ips/themes/fluent/8.png'
    ],
    links: {
      ipsMarketplace:
        'https://invisioncommunity.com/files/file/9539-dark-light-fluent-design-theme-edition/',
      demo: 'https://ips.axendev.net/index.php?app=core&module=system&controller=theme&do=change&id=12'
    },
    price: 36.99,
    createdAt: 1572371315
  },
  {
    id: 'ips-number-of-entries-chatbox-plus',
    name: 'Number of entries Chatbox+',
    categories: [CategoriesProductEnum.IPS_APPS],
    imgs: [
      'https://raw.githubusercontent.com/aXenDeveloper/ips-number-of-entries-chatbox-plus/main/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-number-of-entries-chatbox-plus/main/2.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-number-of-entries-chatbox-plus/main/3.png'
    ],
    links: {
      github:
        'https://github.com/aXenDeveloper/ips-number-of-entries-chatbox-plus',
      ipsMarketplace:
        'https://invisioncommunity.com/files/file/9598-axen-number-of-entries-chatbox/'
    },
    price: 0,
    createdAt: 1602175715,
    deprecated: true
  },
  {
    id: 'sourcebans-web-theme-fluent',
    name: '(Sourcebans++) Fluent Design Theme Edition',
    categories: [CategoriesProductEnum.IPS_APPS],
    imgs: [
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/screenshot.jpg',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/images/demo/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/images/demo/2.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/images/demo/3.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/images/demo/4.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/images/demo/5.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/images/demo/6.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/images/demo/7.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/images/demo/8.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/images/demo/9.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/sourcebans-web-theme-fluent'
    },
    price: 0,
    createdAt: 1629132515,
    deprecated: true
  },
  {
    id: 'react-weather',
    name: 'Weather app',
    categories: [CategoriesProductEnum.REACT, CategoriesProductEnum.TYPESCRIPT],
    imgs: [
      'https://raw.githubusercontent.com/aXenDeveloper/react-weather/main/screenshots/1-min.png',
      'https://raw.githubusercontent.com/aXenDeveloper/react-weather/main/screenshots/2-min.png',
      'https://raw.githubusercontent.com/aXenDeveloper/react-weather/main/screenshots/3-min.png',
      'https://raw.githubusercontent.com/aXenDeveloper/react-weather/main/screenshots/4-min.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/react-weather',
      demo: 'https://weather.axendev.net/'
    },
    price: 0,
    createdAt: 1612288115
  },
  {
    id: 'ips-lang-polish-cj-duplicate-member',
    name: '[BNS] CJ Duplicate Member Logger - Polish translation',
    categories: [CategoriesProductEnum.IPS_TRANSLATIONS],
    imgs: ['https://files.axendev.net/projects/ips/langs/poland.jpg'],
    links: {
      github:
        'https://github.com/aXenDeveloper/ips-lang-polish-cj-duplicate-member'
    },
    price: 0,
    createdAt: 1610905715,
    deprecated: true
  },
  {
    id: 'ips-app-advanced-serverlist',
    name: '(aXen) Advanced Server List',
    categories: [CategoriesProductEnum.IPS_APPS],
    imgs: [
      'https://files.axendev.net/projects/ips/applications/serverlist/1.png',
      'https://files.axendev.net/projects/ips/applications/serverlist/2.png',
      'https://files.axendev.net/projects/ips/applications/serverlist/3.png',
      'https://files.axendev.net/projects/ips/applications/serverlist/4.png',
      'https://files.axendev.net/projects/ips/applications/serverlist/5.png',
      'https://files.axendev.net/projects/ips/applications/serverlist/6.png',
      'https://files.axendev.net/projects/ips/applications/serverlist/7.png',
      'https://files.axendev.net/projects/ips/applications/serverlist/8.png',
      'https://files.axendev.net/projects/ips/applications/serverlist/9.png',
      'https://files.axendev.net/projects/ips/applications/serverlist/10.png',
      'https://files.axendev.net/projects/ips/applications/serverlist/11.png',
      'https://files.axendev.net/projects/ips/applications/serverlist/12.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-app-advanced-serverlist',
      ipsMarketplace:
        'https://invisioncommunity.com/files/file/9852-axen-advanced-server-list/',
      demo: 'https://ips.axendev.net/'
    },
    price: 0,
    createdAt: 1610905715
  },
  {
    id: 'ips-lang-polish-axen-advanced-serverlist',
    name: '(aXen) Advanced Server List - Polish translation',
    categories: [CategoriesProductEnum.IPS_TRANSLATIONS],
    imgs: ['https://files.axendev.net/projects/ips/langs/poland.jpg'],
    links: {
      github:
        'https://github.com/aXenDeveloper/ips-lang-polish-axen-advanced-serverlist'
    },
    price: 0,
    createdAt: 1610905715
  },
  {
    id: 'ips-lang-polish-adriano-contact-us',
    name: '(Adriano Faria) Contact Us - Polish translation',
    categories: [CategoriesProductEnum.IPS_TRANSLATIONS],
    imgs: ['https://files.axendev.net/projects/ips/langs/poland.jpg'],
    links: {
      github:
        'https://github.com/aXenDeveloper/ips-lang-polish-adriano-contact-us'
    },
    price: 0,
    createdAt: 1629564515
  },
  {
    id: 'ips-lang-polish-adriano-contact-us',
    name: '(Express / React) Recipes app',
    categories: [
      CategoriesProductEnum.REACT,
      CategoriesProductEnum.NODE_JS,
      CategoriesProductEnum.TYPESCRIPT
    ],
    imgs: [
      'https://raw.githubusercontent.com/aXenDeveloper/express-react-recipes/main/screenshots/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/express-react-recipes/main/screenshots/2.png',
      'https://raw.githubusercontent.com/aXenDeveloper/express-react-recipes/main/screenshots/3.png',
      'https://raw.githubusercontent.com/aXenDeveloper/express-react-recipes/main/screenshots/4.png',
      'https://raw.githubusercontent.com/aXenDeveloper/express-react-recipes/main/screenshots/5.png',
      'https://raw.githubusercontent.com/aXenDeveloper/express-react-recipes/main/screenshots/6.png',
      'https://raw.githubusercontent.com/aXenDeveloper/express-react-recipes/main/screenshots/7.png',
      'https://raw.githubusercontent.com/aXenDeveloper/express-react-recipes/main/screenshots/8.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/express-react-recipes'
    },
    price: 0,
    createdAt: 1609523315
  },
  {
    id: 'ts-apex-legends-random-equipment',
    name: 'Apex Legends - Random Equipment',
    categories: [CategoriesProductEnum.TYPESCRIPT],
    imgs: [
      'https://raw.githubusercontent.com/aXenDeveloper/ts-apex-legends-random-equipment/master/screenshots/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ts-apex-legends-random-equipment/master/screenshots/2.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ts-apex-legends-random-equipment/master/screenshots/3.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ts-apex-legends-random-equipment/master/screenshots/4.png'
    ],
    links: {
      github:
        'https://github.com/aXenDeveloper/ts-apex-legends-random-equipment',
      demo: 'https://apex.axendev.net/'
    },
    price: 0,
    createdAt: 1618332515
  },
  {
    id: 'react-native-basic-to-do',
    name: 'Basic To Do List',
    categories: [
      CategoriesProductEnum.REACT_NATIVE,
      CategoriesProductEnum.TYPESCRIPT
    ],
    imgs: [
      'https://raw.githubusercontent.com/aXenDeveloper/react-native-basic-to-do/main/screenshots/2.png',
      'https://raw.githubusercontent.com/aXenDeveloper/react-native-basic-to-do/main/screenshots/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/react-native-basic-to-do/main/screenshots/3.png',
      'https://raw.githubusercontent.com/aXenDeveloper/react-native-basic-to-do/main/screenshots/4.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/react-native-basic-to-do'
    },
    price: 0,
    createdAt: 1619196515
  },
  {
    id: 'ips-theme-dynamic',
    name: 'Dynamic Theme',
    categories: [CategoriesProductEnum.IPS_THEMES],
    imgs: [
      'https://raw.githubusercontent.com/aXenDeveloper/ips-theme-dynamic/master/screenshots/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-theme-dynamic/master/screenshots/2.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-theme-dynamic/master/screenshots/3.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-theme-dynamic/master/screenshots/4.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-theme-dynamic/master/screenshots/5.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-theme-dynamic/master/screenshots/6.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-theme-dynamic',
      ipsMarketplace:
        'https://invisioncommunity.com/files/file/9882-dynamic-theme/',
      demo: 'https://ips.axendev.net/index.php?app=core&module=system&controller=theme&do=change&id=3'
    },
    price: 0,
    createdAt: 1621183715
  },
  {
    id: 'ips-full-width-widget-containers',
    name: '(aXen) Full width widget containers',
    categories: [CategoriesProductEnum.IPS_APPS],
    imgs: [
      'https://raw.githubusercontent.com/aXenDeveloper/ips-full-width-widget-containers/master/screenshots/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-full-width-widget-containers/master/screenshots/2.png'
    ],
    links: {
      github:
        'https://github.com/aXenDeveloper/ips-full-width-widget-containers'
    },
    price: 0,
    createdAt: 1621615715
  },
  {
    id: 'ips-app-advanced-members',
    name: '(aXen) Advanced Members',
    categories: [CategoriesProductEnum.IPS_APPS],
    imgs: [
      'https://files.axendev.net/projects/ips/applications/members/2.png',
      'https://files.axendev.net/projects/ips/applications/members/1.png',
      'https://files.axendev.net/projects/ips/applications/members/3.png',
      'https://files.axendev.net/projects/ips/applications/members/4.png',
      'https://files.axendev.net/projects/ips/applications/members/5.png',
      'https://files.axendev.net/projects/ips/applications/members/6.png',
      'https://files.axendev.net/projects/ips/applications/members/7.png',
      'https://files.axendev.net/projects/ips/applications/members/8.png',
      'https://files.axendev.net/projects/ips/applications/members/9.png',
      'https://files.axendev.net/projects/ips/applications/members/10.png',
      'https://files.axendev.net/projects/ips/applications/members/11.png',
      'https://files.axendev.net/projects/ips/applications/members/12.png',
      'https://files.axendev.net/projects/ips/applications/members/13.png',
      'https://files.axendev.net/projects/ips/applications/members/14.png'
    ],
    links: {
      ipsMarketplace:
        'https://invisioncommunity.com/files/file/9892-axen-advanced-members/'
    },
    price: 19.99,
    createdAt: 1623602915
  },
  {
    id: 'ips-lang-polish-axen-advanced-members',
    name: '(aXen) Advanced Members - Polish translation',
    categories: [CategoriesProductEnum.IPS_TRANSLATIONS],
    imgs: ['https://files.axendev.net/projects/ips/langs/poland.jpg'],
    links: {
      github:
        'https://github.com/aXenDeveloper/ips-lang-polish-axen-advanced-members'
    },
    price: 0,
    createdAt: 1623602915
  }
];
