import { PAGE_PATHS } from '../../contactFormConstants';

export const TIERS = {
  teams: {
    name: 'Teams',
    description: 'For teams who want a home for their services, docs, runbooks, API specs and CI.',
    minSeats: 50,
    maxSeats: 150,

    ctaLabel: 'Start a free trial',
    ctaLinkTo: PAGE_PATHS.freeTrial,
    ctaHelpText: 'No credit card required',

    usdCentCostPerDevPerMonth: 2400,
    eurCentCostPerDevPerMonth: 2000,
    costQualifier: ' per dev/month',
    customPricing: false,
    pricingCondition: '50 to 150 developers. Unlimited entities.',

    benefits: {
      heading: "Key features",
      bullets: [{
        description: 'Backstage software catalog',
      }, {
        description: 'Monthly, automatic upgrades',
      }, {
        description: 'TechDocs & API specs',
      }, {
        description: 'Scaffolder golden paths',
      }, {
        description: '75+ Open-source Backstage plugins',
      }, {
        description: 'RAG AI & MCP Server Access (beta)',
      }, {
        description: 'Single sign on',
      }, {
        iconName: 'plus', description: 'Scorecards (optional paid extra)',
      }, {
        iconName: 'plus', description: 'Custom RBAC (optional paid extra)',
      }],
    },
  },

  growth: {
    name: 'Growth',
    description: 'For excellent engineering orgs who want to maintain effectiveness through hypergrowth',
    minSeats: 100,

    ctaLabel: 'Request a demo',
    ctaLinkTo: PAGE_PATHS.freeTrial,

    customPricing: true,
    pricingCondition: '100 developers or more. Unlimited entities.',

    benefits: {
      heading: "Everything in Teams, plus...",
      bullets: [{
        description: 'SLA',
      }, {
        description: 'Slack & MS Teams support',
      }, {
        description: 'Custom, private Backstage plugins',
      }, {
        description: 'REST API access',
      }, {
        description: 'Secure on-prem connection',
      }, {
        description: 'Usage analytics dashboard',
      }],
    },
  },
};
