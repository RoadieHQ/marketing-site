import { PAGE_PATHS } from '../../src/contactFormConstants';

describe('The Roadie Local page', () => {
  beforeEach(() => {
    // We have to stub beause netlify forms don't work in this environment.
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 200,
    });
  });

  it('has a flow for requesting access to Roadie Local', () => {
    cy.visit(PAGE_PATHS.getRoadieLocal);
    cy.contains('Request access').click();

    cy.get('#request-roadie-local-name-input').type('Mary Mac');
    cy.get('#request-roadie-local-email-input').type('test@example.com');
    cy.get('#reported-attribution').type('Newsletter');
    cy.get('button[data-testid="sub-to-newsletter"]').click();
    cy.contains('Request access')
      .should('not.be.disabled', { timeout: 10000 }) // wait up to 10s
      .click();
    cy.contains("We'll be in touch");
  });

  it('has a flow for users who use choose other', () => {
    cy.visit(PAGE_PATHS.getRoadieLocal);
    cy.contains('Request access').click();

    cy.get('#request-roadie-local-name-input').type('Mary Mac');
    cy.get('#request-roadie-local-email-input').type('test@example.com');
    cy.get('#scm').select('Other');
    cy.contains('Request access')
      .should('not.be.disabled', { timeout: 10000 }) // wait up to 10s
      .click();
    cy.contains(`be in touch to learn more`);
  });
});
