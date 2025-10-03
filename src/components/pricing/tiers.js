import { PAGE_PATHS } from '../../contactFormConstants';

export const TIERS = [
  {
    name: 'Teams',
    description: 'For teams who want a developer portal without sucking up engineering time.',
    minSeats: 50,
    maxSeats: 150,

    ctaLabel: 'Start a free trial',
    ctaLinkTo: PAGE_PATHS.freeTrial,

    usdCentCostPerDevPerMonth: 2400,
    eurCentCostPerDevPerMonth: 2000,
    costQualifier: ' per dev/month',
    customPricing: false,
    get pricingCondition() {
      return `${this.minSeats} to ${this.maxSeats} developers. Unlimited entities.`;
    },

    benefits: {
      heading: 'Key features',
      bullets: [
        {
          description: 'Backstage software catalog',
        },
        {
          description: 'Automatic Backstage upgrades',
        },
        {
          description: 'TechDocs & API specs',
        },
        {
          description: 'Self-service automation templates',
        },
        {
          description: '75+ open-source plugins',
        },
        {
          description: 'Single sign-on',
        },
        {
          iconName: 'plus',
          description: 'Scorecards (optional paid extra)',
        },
      ],
    },
  },
  {
    name: 'Growth',
    description:
      'For excellent engineering orgs who want to maintain effectiveness through hypergrowth',
    minSeats: 100,

    ctaLabel: 'Request a demo',
    ctaLinkTo: PAGE_PATHS.freeTrial,

    customPricing: true,
    get pricingCondition() {
      return `${this.minSeats} developers or more. Unlimited entities.`;
    },

    benefits: {
      heading: 'Everything in Teams, plus...',
      bullets: [
        {
          description: 'SLA',
        },
        {
          description: 'Slack & MS Teams support',
        },
        {
          description: 'RAG AI & MCP Server Access (beta)',
        },
        {
          description: 'Custom, private Backstage plugins',
        },
        {
          description: 'REST API access',
        },
        {
          description: 'Advanced search',
        },
        {
          description: 'Secure on-prem connection',
        },
        {
          description: 'Usage analytics dashboard',
        },
        {
          description: 'Custom RBAC',
        },
      ],
    },
  },
];
