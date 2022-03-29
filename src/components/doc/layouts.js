import sidebar from '../../../content/docs/docs-nav.yaml';

export const DOCS_LAYOUTS = [{
  tabLabel: 'Getting started',
  startPath: '/docs/getting-started/install-github-app/',
  isActiveMatch: /\/docs\/getting-started/,
  sidebarNavItemGroups: [sidebar.nav[0]],
}, {
  tabLabel: 'Plugins & Integrations',
  startPath: '/docs/integrations/argocd/',
  isActiveMatch: '/docs/(?:custom-plugins|integrations)/',
  sidebarNavItemGroups: [sidebar.nav[1], sidebar.nav[2], sidebar.nav[3]],
}, {
  tabLabel: 'In-depth',
  startPath: '/docs/details/github-app-permissions/',
  isActiveMatch: '/docs/details/',
  sidebarNavItemGroups: [sidebar.nav[4]],
}];

