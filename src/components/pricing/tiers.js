import { PAGE_PATHS } from '../../contactFormConstants';

const TIERS = {
  teams: {
    name: 'Teams',
    minSeats: 50,
    description: 'For teams who want a home for their services, docs, runbooks, API specs and CI.',
    ctaLabel: 'Start a free trial',
    ctaLinkTo: PAGE_PATHS.freeTrial,
  },

  growth: {
    name: 'Growth',
    minSeats: 100,
    description:
      'For excellent engineering orgs who want to maintain effectiveness through hypergrowth',
    ctaLabel: 'Request a demo',
    ctaLinkTo: PAGE_PATHS.freeTrial,
  },

  local: {
    name: 'Local',
    minSeats: 'N/A',
    description:
      'For security-conscious orgs who want to self-host Roadie, Roadie Local is a dockerised version of Roadie SaaS that can be run on your network.',
    ctaLabel: 'Request Access',
    ctaLinkTo: PAGE_PATHS.freeTrial,
  },
};

export default TIERS;
