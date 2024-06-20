const CHARGEBEE_URL = 'https://roadie-test.chargebee.com/hosted_pages/checkout';

describe('Purchasing', () => {
  it('the teams plan sends the user to chargebee', () => {
    cy.visit('/purchase/');
    cy.contains('$1,100 billed monthly');

    const quantity = 120;
    cy.get('#teams-plan-number-of-engineers').select(quantity.toString());
    cy.contains('$2,400 billed monthly');

    const PLAN_NAME = 'Roadie-Teams-Plan-USD-Monthly';
    cy.get('a#teams-plan-cta').should('have.attr', 'href', `${CHARGEBEE_URL}?subscription_items%5Bitem_price_id%5D%5B0%5D=${PLAN_NAME}&subscription_items%5Bquantity%5D%5B0%5D=${quantity}`);
  });
});
