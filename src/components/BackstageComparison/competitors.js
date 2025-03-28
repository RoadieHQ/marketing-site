import { PAGE_PATHS } from '../../contactFormConstants';

const COMPETITORS = {
  roadie_saas: {
    name: 'RoadieSaaS',
    description:
      'For excellent engineering orgs who want a home for their services, docs, runbooks, API specs and CI.',
    ctaLabel: 'Start a free trial',
    ctaLinkTo: PAGE_PATHS.freeTrial,
  },

  roadie_local: {
    name: 'RoadieLocal',
    description:
      'For excellent engineering orgs who want a home for their services, docs, runbooks, API specs and CI.',
    ctaLabel: 'Start a free trial',
    ctaLinkTo: PAGE_PATHS.freeTrial,
  },

  backstage: {
    name: 'Backstage',
    description: 'For big engineering orgs who want to maintain effectiveness through hypergrowth',
    ctaLabel: 'See a demo',
    ctaLinkTo: 'https://backstage.io',
  },
};

export default COMPETITORS;
