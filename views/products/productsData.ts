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

export interface LinksProductsInterface {
  demo?: string;
  github?: string;
  invisionize?: string;
}

export interface ProductsInterface {
  categories: CategoriesProductEnum[];
  createdAt: number;
  id: string;
  images: string[];
  links: LinksProductsInterface;
  name: string;
  oneUSDtoPLN: number | undefined;
  price: number;
  deprecated?: boolean;
  single?: boolean;
}

export const productsData: Omit<ProductsInterface, 'oneUSDtoPLN'>[] = [
  {
    id: 'ips-secondary-groups-indicator',
    name: 'Secondary Groups Indicator',
    categories: [CategoriesProductEnum.IPS_APPS],
    images: [
      'https://raw.githubusercontent.com/aXenDeveloper/ips-secondary-groups-indicator/master/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-secondary-groups-indicator/master/2.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-secondary-groups-indicator/master/3.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-secondary-groups-indicator/master/4.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-secondary-groups-indicator/master/5.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-secondary-groups-indicator',
      invisionize: 'https://forum.invisionize.pl/files/file/772-axen-secondary-groups-indicator/'
    },
    price: 0,
    createdAt: 1502380560
  },
  {
    id: 'ips-number-of-entries-chatbox',
    name: 'Number of entries Chatbox Free',
    categories: [CategoriesProductEnum.IPS_APPS],
    images: [
      'https://raw.githubusercontent.com/aXenDeveloper/ips-number-of-entries-chatbox/main/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-number-of-entries-chatbox/main/2.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-number-of-entries-chatbox/main/3.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-number-of-entries-chatbox',
      invisionize:
        'https://forum.invisionize.pl/files/file/767-axen-number-of-entries-chatbox-free/'
    },
    price: 0,
    createdAt: 1502380800,
    deprecated: true
  },
  {
    id: 'ips-group-formatting-in-mention',
    name: 'Group formatting in mention',
    categories: [CategoriesProductEnum.IPS_APPS],
    images: [
      'https://raw.githubusercontent.com/aXenDeveloper/ips-group-formatting-in-mention/master/1.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-group-formatting-in-mention',
      invisionize: 'https://forum.invisionize.pl/files/file/788-axen-group-formatting-in-mention/'
    },
    price: 0,
    createdAt: 1550781000
  },
  {
    id: 'ips-fontawesome5',
    name: 'Font Awesome 5 in IPS',
    categories: [CategoriesProductEnum.IPS_APPS],
    images: ['https://files.axendev.net/projects/ips/plugins/fontawesome5/1.png'],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-fontawesome5',
      invisionize: 'https://forum.invisionize.pl/files/file/790-axen-font-awesome-5-in-ips/'
    },
    price: 0,
    createdAt: 1562787360,
    deprecated: true
  },
  {
    id: 'ips-article-system-in-pages',
    name: 'Article System in Pages',
    categories: [CategoriesProductEnum.IPS_APPS],
    images: [
      'https://files.axendev.net/projects/ips/plugins/articlesystem/1.png',
      'https://files.axendev.net/projects/ips/plugins/articlesystem/2.png',
      'https://files.axendev.net/projects/ips/plugins/articlesystem/3.png',
      'https://files.axendev.net/projects/ips/plugins/articlesystem/4.png',
      'https://files.axendev.net/projects/ips/plugins/articlesystem/5.png',
      'https://files.axendev.net/projects/ips/plugins/articlesystem/6.png',
      'https://files.axendev.net/projects/ips/plugins/articlesystem/7.png'
    ],
    links: {
      invisionize: 'https://forum.invisionize.pl/files/file/791-axen-article-system-in-pages/',
      demo: 'https://1shot2kill.pl/portal/'
    },
    price: 54.99,
    createdAt: 1567063140
  },
  {
    id: 'ips-administrative-bar',
    name: 'Administrative bar',
    categories: [CategoriesProductEnum.IPS_APPS],
    images: [
      'https://raw.githubusercontent.com/aXenDeveloper/ips-administrative-bar/master/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-administrative-bar/master/2.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-administrative-bar',
      invisionize: 'https://forum.invisionize.pl/files/file/793-axen-administrative-bar/'
    },
    price: 0,
    createdAt: 1565370360
  },
  {
    id: 'ips-lang-polish-chatbox-plus',
    name: '(BIM) Chatbox+ - Polish translation',
    categories: [CategoriesProductEnum.IPS_TRANSLATIONS],
    images: ['https://files.axendev.net/projects/ips/langs/chatbox+/1.png'],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-lang-polish-chatbox-plus'
    },
    price: 0,
    createdAt: 1603753740
  },
  {
    id: 'ips-theme-fluent-design',
    name: 'Fluent Design Theme Edition',
    categories: [CategoriesProductEnum.IPS_THEMES],
    images: [
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
      invisionize:
        'https://forum.invisionize.pl/files/file/794-dark-light-fluent-design-theme-edition/',
      demo: 'https://ips.axendev.net/index.php?app=core&module=system&controller=theme&do=change&id=12'
    },
    price: 159.99,
    createdAt: 1572346320
  },
  {
    id: 'ips-number-of-entries-chatbox-plus',
    name: 'Number of entries Chatbox+',
    categories: [CategoriesProductEnum.IPS_APPS],
    images: [
      'https://raw.githubusercontent.com/aXenDeveloper/ips-number-of-entries-chatbox-plus/main/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-number-of-entries-chatbox-plus/main/2.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-number-of-entries-chatbox-plus/main/3.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-number-of-entries-chatbox-plus',
      invisionize: 'https://forum.invisionize.pl/files/file/803-axen-number-of-entries-chatbox/'
    },
    price: 0,
    createdAt: 1580376060,
    deprecated: true
  },
  {
    id: 'sourcebans-web-theme-fluent',
    name: '(Sourcebans++) Fluent Design Theme Edition',
    categories: [CategoriesProductEnum.OTHERS],
    images: [
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/sourcebans-web-theme-fluent/screenshot.jpg',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/screenshots/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/screenshots/2.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/screenshots/3.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/screenshots/4.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/screenshots/5.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/screenshots/6.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/screenshots/7.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/screenshots/8.png',
      'https://raw.githubusercontent.com/aXenDeveloper/sourcebans-web-theme-fluent/master/screenshots/9.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/sourcebans-web-theme-fluent'
    },
    price: 0,
    createdAt: 1629138960,
    deprecated: true
  },
  {
    id: 'react-weather',
    name: 'Weather app',
    categories: [CategoriesProductEnum.REACT, CategoriesProductEnum.TYPESCRIPT],
    images: [
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
    createdAt: 1612305960
  },
  {
    id: 'ips-lang-polish-cj-duplicate-member',
    name: '[BNS] CJ Duplicate Member Logger - Polish translation',
    categories: [CategoriesProductEnum.IPS_TRANSLATIONS],
    images: ['https://files.axendev.net/projects/ips/langs/poland.jpg'],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-lang-polish-cj-duplicate-member'
    },
    price: 0,
    createdAt: 1610901960,
    deprecated: true
  },
  {
    id: 'ips-app-advanced-serverlist',
    name: 'Advanced Server List',
    categories: [CategoriesProductEnum.IPS_APPS],
    images: [
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
      invisionize: 'https://forum.invisionize.pl/files/file/825-axen-advanced-server-list/',
      demo: 'https://ips.axendev.net/'
    },
    price: 0,
    createdAt: 1616016540
  },
  {
    id: 'ips-lang-polish-axen-advanced-serverlist',
    name: 'Advanced Server List - Polish translation',
    categories: [CategoriesProductEnum.IPS_TRANSLATIONS],
    images: ['https://files.axendev.net/projects/ips/langs/poland.jpg'],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-lang-polish-axen-advanced-serverlist'
    },
    price: 0,
    createdAt: 1615897680
  },
  {
    id: 'ips-lang-polish-adriano-contact-us',
    name: '(Adriano Faria) Contact Us - Polish translation',
    categories: [CategoriesProductEnum.IPS_TRANSLATIONS],
    images: ['https://files.axendev.net/projects/ips/langs/poland.jpg'],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-lang-polish-adriano-contact-us'
    },
    price: 0,
    createdAt: 1629532140
  },
  {
    id: 'express-react-recipes',
    name: '(Express / React) Recipes app',
    categories: [
      CategoriesProductEnum.REACT,
      CategoriesProductEnum.NODE_JS,
      CategoriesProductEnum.TYPESCRIPT
    ],
    images: [
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
    createdAt: 1620813240
  },
  {
    id: 'ts-apex-legends-random-equipment',
    name: 'Apex Legends - Random Equipment',
    categories: [CategoriesProductEnum.TYPESCRIPT],
    images: [
      'https://raw.githubusercontent.com/aXenDeveloper/ts-apex-legends-random-equipment/master/screenshots/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ts-apex-legends-random-equipment/master/screenshots/2.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ts-apex-legends-random-equipment/master/screenshots/3.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ts-apex-legends-random-equipment/master/screenshots/4.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/ts-apex-legends-random-equipment',
      demo: 'https://apex.axendev.net/'
    },
    price: 0,
    createdAt: 1609757520
  },
  {
    id: 'react-native-basic-to-do',
    name: 'Basic To Do List',
    categories: [CategoriesProductEnum.REACT_NATIVE, CategoriesProductEnum.TYPESCRIPT],
    images: [
      'https://raw.githubusercontent.com/aXenDeveloper/react-native-basic-to-do/main/screenshots/2.png',
      'https://raw.githubusercontent.com/aXenDeveloper/react-native-basic-to-do/main/screenshots/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/react-native-basic-to-do/main/screenshots/3.png',
      'https://raw.githubusercontent.com/aXenDeveloper/react-native-basic-to-do/main/screenshots/4.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/react-native-basic-to-do'
    },
    price: 0,
    createdAt: 1619945340
  },
  {
    id: 'ips-theme-dynamic',
    name: 'Dynamic Theme',
    categories: [CategoriesProductEnum.IPS_THEMES],
    images: [
      'https://raw.githubusercontent.com/aXenDeveloper/ips-theme-dynamic/master/screenshots/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-theme-dynamic/master/screenshots/2.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-theme-dynamic/master/screenshots/3.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-theme-dynamic/master/screenshots/4.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-theme-dynamic/master/screenshots/5.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-theme-dynamic/master/screenshots/6.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-theme-dynamic',
      invisionize: 'https://forum.invisionize.pl/files/file/829-dynamic-theme/',
      demo: 'https://ips.axendev.net/index.php?app=core&module=system&controller=theme&do=change&id=3'
    },
    price: 0,
    createdAt: 1621167600
  },
  {
    id: 'ips-full-width-widget-containers',
    name: 'Full width widget containers',
    categories: [CategoriesProductEnum.IPS_APPS],
    images: [
      'https://raw.githubusercontent.com/aXenDeveloper/ips-full-width-widget-containers/master/screenshots/1.png',
      'https://raw.githubusercontent.com/aXenDeveloper/ips-full-width-widget-containers/master/screenshots/2.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-full-width-widget-containers',
      invisionize: 'https://forum.invisionize.pl/files/file/830-axen-full-width-widget-containers/'
    },
    price: 0,
    createdAt: 1621608360
  },
  {
    id: 'ips-app-advanced-members',
    name: 'Advanced Members',
    categories: [CategoriesProductEnum.IPS_APPS],
    images: [
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
      invisionize: 'https://forum.invisionize.pl/files/file/831-axen-advanced-members/'
    },
    price: 134.99,
    createdAt: 1623602700
  },
  {
    id: 'ips-lang-polish-axen-advanced-members',
    name: 'Advanced Members - Polish translation',
    categories: [CategoriesProductEnum.IPS_TRANSLATIONS],
    images: ['https://files.axendev.net/projects/ips/langs/poland.jpg'],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-lang-polish-axen-advanced-members'
    },
    price: 0,
    createdAt: 1623602700
  },
  {
    id: 'ips-lact-activity-in-hovercard',
    name: 'Last activity in Hovercard',
    categories: [CategoriesProductEnum.IPS_APPS],
    images: [
      'https://raw.githubusercontent.com/aXenDeveloper/ips-lact-activity-in-hovercard/master/screenshots/1.png'
    ],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-lact-activity-in-hovercard',
      invisionize: 'https://forum.invisionize.pl/files/file/834-axen-last-activity-in-hovercard/'
    },
    price: 0,
    createdAt: 1624810560
  },
  {
    id: 'ips-app-vacation',
    name: 'Vacation',
    categories: [CategoriesProductEnum.IPS_APPS],
    images: [
      'https://files.axendev.net/projects/ips/applications/vacation/1.png',
      'https://files.axendev.net/projects/ips/applications/vacation/2.png',
      'https://files.axendev.net/projects/ips/applications/vacation/3.png',
      'https://files.axendev.net/projects/ips/applications/vacation/4.png',
      'https://files.axendev.net/projects/ips/applications/vacation/5.png',
      'https://files.axendev.net/projects/ips/applications/vacation/6.png',
      'https://files.axendev.net/projects/ips/applications/vacation/7.png',
      'https://files.axendev.net/projects/ips/applications/vacation/8.png',
      'https://files.axendev.net/projects/ips/applications/vacation/9.png',
      'https://files.axendev.net/projects/ips/applications/vacation/10.png',
      'https://files.axendev.net/projects/ips/applications/vacation/11.png',
      'https://files.axendev.net/projects/ips/applications/vacation/12.png',
      'https://files.axendev.net/projects/ips/applications/vacation/13.png',
      'https://files.axendev.net/projects/ips/applications/vacation/14.png',
      'https://files.axendev.net/projects/ips/applications/vacation/15.png',
      'https://files.axendev.net/projects/ips/applications/vacation/16.png'
    ],
    links: {
      invisionize: 'https://forum.invisionize.pl/files/file/835-axen-vacation/'
    },
    price: 89.99,
    createdAt: 1629019800
  },
  {
    id: 'ips-lang-polish-axen-vacation',
    name: 'Vacation - Polish translation',
    categories: [CategoriesProductEnum.IPS_TRANSLATIONS],
    images: ['https://files.axendev.net/projects/ips/langs/poland.jpg'],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-lang-polish-axen-vacation'
    },
    price: 0,
    createdAt: 1629020100
  },
  {
    id: 'ips-app-fontawesome6',
    name: 'Font Awesome 6 in IPS',
    categories: [CategoriesProductEnum.IPS_APPS],
    images: ['https://files.axendev.net/projects/ips/applications/fontawesome6/1.png'],
    links: {
      invisionize: 'https://forum.invisionize.pl/files/file/837-axen-font-awesome-6-in-ips/',
      github: 'https://github.com/aXenDeveloper/ips-app-fontawesome6'
    },
    price: 0,
    createdAt: 1643974920
  },
  {
    id: 'ips-app-content-notes',
    name: 'Content Notes',
    categories: [CategoriesProductEnum.IPS_APPS],
    images: [
      'https://files.axendev.net/projects/ips/applications/contentnotes/1.png',
      'https://files.axendev.net/projects/ips/applications/contentnotes/2.png',
      'https://files.axendev.net/projects/ips/applications/contentnotes/3.png',
      'https://files.axendev.net/projects/ips/applications/contentnotes/4.png',
      'https://files.axendev.net/projects/ips/applications/contentnotes/5.png',
      'https://files.axendev.net/projects/ips/applications/contentnotes/6.png',
      'https://files.axendev.net/projects/ips/applications/contentnotes/7.png',
      'https://files.axendev.net/projects/ips/applications/contentnotes/8.png'
    ],
    links: {
      invisionize: 'https://forum.invisionize.pl/files/file/838-axen-content-notes/'
    },
    price: 129.99,
    createdAt: 1646567160
  },
  {
    id: 'ips-lang-polish-axen-content-notes',
    name: 'Content Notes - Polish translation',
    categories: [CategoriesProductEnum.IPS_TRANSLATIONS],
    images: ['https://files.axendev.net/projects/ips/langs/poland.jpg'],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-lang-polish-axen-content-notes'
    },
    price: 0,
    createdAt: 1646567520
  },
  {
    id: 'ips-app-axen-player-panel',
    name: 'Player Panel',
    categories: [CategoriesProductEnum.IPS_APPS],
    images: [
      'https://files.axendev.net/projects/ips/applications/playerpanel/2.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/1.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/3.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/4.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/5.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/6.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/7.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/8.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/9.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/10.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/11.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/12.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/13.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/14.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/15.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/16.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/17.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/18.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/19.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/20.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/21.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/22.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/23.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/24.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/25.png',
      'https://files.axendev.net/projects/ips/applications/playerpanel/26.png'
    ],
    links: {
      invisionize: 'https://forum.invisionize.pl/files/file/844-axen-player-panel/'
    },
    price: 249.99,
    createdAt: 1664550960
  },
  {
    id: 'ips-lang-polish-axen-player-panel',
    name: 'Player Panel - Polish translation',
    categories: [CategoriesProductEnum.IPS_TRANSLATIONS],
    images: ['https://files.axendev.net/projects/ips/langs/poland.jpg'],
    links: {
      github: 'https://github.com/aXenDeveloper/ips-lang-polish-axen-player-panel'
    },
    price: 0,
    createdAt: 1664551320
  }
];
