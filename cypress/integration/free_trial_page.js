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
    // This is a custom CSS checkbox which is technically invisble. Cypress
    // complains so we have to force it.
    cy.get('#get-instance-scm-github-on-prem-input').check({ force: true });
    cy.get('button[data-testid="agree-to-policies"]').click();
    cy.contains('Request a trial').click();
    cy.contains('Thank you for requesting a free trial of Roadie Backstage');
  });

  it('has a flow for rejecting users who use unsupported SCMs', () => {
    cy.visit('/free-trial/');

    cy.get('#get-instance-email-input').type('test@example.com');
    // This is a custom CSS checkbox which is technically invisble. Cypress
    // complains so we have to force it.
    cy.get('#get-instance-scm-gitlab-cloud-input').check({ force: true });
    cy.get('button[data-testid="agree-to-policies"]').click();
    cy.contains('Request a trial').click();
    cy.contains('Roadie only supports GitHub for now');
  });
});
