import sidebar from '../../../content/docs/docs-nav.yaml';

export const DOCS_LAYOUTS = [
  {
    tabLabel: 'Home',
    startPath: '/docs/',
    isActiveMatch: /^\/docs\/$/,
    sidebarNavItemGroups: null,
  },
  {
    tabLabel: 'Getting started',
    startPath: '/docs/getting-started/install-github-app/',
    isActiveMatch: /\/docs\/getting-started/,
    sidebarNavItemGroups: [sidebar.nav[0]],
  },
  {
    tabLabel: 'Plugins & Integrations',
    startPath: '/docs/integrations/',
    isActiveMatch: '/docs/integrations',
    sidebarNavItemGroups: [sidebar.nav[1], sidebar.nav[2]],
  },
  {
    tabLabel: 'In-depth',
    startPath: '/docs/details/accessing-aws-resources/',
    isActiveMatch: '/docs/details',
    sidebarNavItemGroups: [sidebar.nav[3]],
  },
  {
    tabLabel: 'Custom Plugins',
    startPath: '/docs/custom-plugins/getting-started/',
    isActiveMatch: '/docs/custom-plugins/',
    sidebarNavItemGroups: [sidebar.nav[4]],
  },
  {
    tabLabel: 'Scaffolder',
    startPath: '/docs/scaffolder/writing-templates/',
    isActiveMatch: /\/docs\/scaffolder/,
    sidebarNavItemGroups: [sidebar.nav[5]],
  },
  {
    tabLabel: 'Tech Insights',
    startPath: '/docs/tech-insights/introduction/',
    isActiveMatch: /\/docs\/tech-insights/,
    sidebarNavItemGroups: [sidebar.nav[6]],
  },
];
