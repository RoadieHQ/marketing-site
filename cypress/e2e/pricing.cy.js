import {
  PER_SEAT_PRICES_MARKETING,
  USD_TO_EUR_EXCHANGE_RATE,
  SCORECARDS_USD_CENTS_PRICE,
} from '../../src/components/pricing/prices';

describe('Pricing', () => {
  it('switches from dollars to euros', () => {
    const dollarPrice = PER_SEAT_PRICES_MARKETING[0].usdCentCostPerDevPerMonth / 100;
    const eurPrice = Math.round(dollarPrice * USD_TO_EUR_EXCHANGE_RATE); 

    cy.visit('/pricing/');
    cy.contains(`$${dollarPrice} per dev/month`);

    cy.get('#currency-switcher-eur').click();
    cy.contains(`€${eurPrice} per dev/month`);
  });

  it('changes the number of seats', () => {
    const dollarPrice = PER_SEAT_PRICES_MARKETING[1].usdCentCostPerDevPerMonth / 100;
    const selectText = PER_SEAT_PRICES_MARKETING[1].name;

    cy.visit('/pricing/');
    cy.get(`#teams-plan-number-of-engineers`).select(selectText);

    cy.contains(`$${dollarPrice} per dev/month`);
  });

  it('adds on the scorecards cost', () => {
    const dollarPrice = (PER_SEAT_PRICES_MARKETING[0].usdCentCostPerDevPerMonth + SCORECARDS_USD_CENTS_PRICE) / 100;

    cy.visit('/pricing/');
    cy.get('button[data-testid="scorecards"]').click();

    cy.contains(`$${dollarPrice} per dev/month`);
  });
});
