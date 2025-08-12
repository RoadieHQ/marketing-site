import { PAGE_PATHS } from '../../contactFormConstants';

export const USD_TO_EUR_EXCHANGE_RATE = 0.83;

export const TIERS = {
  teams: {
    name: 'Teams',
    minSeats: 50,
    maxSeats: 150,
    description: 'For teams who want a home for their services, docs, runbooks, API specs and CI.',
    ctaLabel: 'Start a free trial',
    ctaLinkTo: PAGE_PATHS.freeTrial,
    usdCentCostPerDevPerMonth: 2400,
  },

  growth: {
    name: 'Growth',
    minSeats: 100,
    description: 'For excellent engineering orgs who want to maintain effectiveness through hypergrowth',
    ctaLabel: 'Request a demo',
    ctaLinkTo: PAGE_PATHS.freeTrial,
  },
};
