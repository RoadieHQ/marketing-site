describe('The free trial page', () => {
  beforeEach(() => {
    // We have to stub beause netlify forms don't work in this environment.
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 200,
    });
  });

  it('has a flow for getting a free trial', () => {
    cy.visit('/free-trial/');

    cy.get('#get-instance-email-input').type('test@example.com');
    cy.get('#scm').select('GitHub On-prem');
    cy.get('button[data-testid="agree-to-policies"]').click();
    cy.contains('Request a trial').click();
    cy.contains('Thank you for requesting a free trial of Roadie Backstage');
  });

  it('has a flow for rejecting users who use unsupported SCMs', () => {
    cy.visit('/free-trial/');

    cy.get('#get-instance-email-input').type('test@example.com');
    cy.get('#scm').select('Gitlab Cloud');
    cy.get('button[data-testid="agree-to-policies"]').click();
    cy.contains('Request a trial').click();
    cy.contains('Roadie only supports GitHub for now');
  });
});
