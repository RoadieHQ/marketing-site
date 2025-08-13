import { TIERS } from '../../src/components/pricing/tiers';

describe('The pricing page', () => {
  it('should change currency', () => {
    cy.visit('/pricing/');

    cy.get('#teams-cost-display').then((ele) => {
      cy.log(ele.text());
    });
    cy.get('#teams-cost-display')
      .contains(`$${Math.round(TIERS.teams.usdCentCostPerDevPerMonth / 100)}`);
    cy.get('#currency-switcher-eur').click();
    cy.get('#teams-cost-display').then((ele) => {
      cy.log(ele.text());
    });
    cy.get('#teams-cost-display')
      .contains(`€${Math.round(TIERS.teams.eurCentCostPerDevPerMonth / 100)}`);
  });
});
