describe('The landing page', () => {
  beforeEach(() => {
    // We have to stub beause netlify forms don't work in this environment.
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 200,
    });
  });

  it('has a flow for requesting a demo', () => {
    cy.visit('');
    cy.contains('Get a demo').click();

    cy.get('#request-demo-name-input').type('Mary Mac');
    cy.get('#request-demo-email-input').type('test@example.com');
    cy.get('button[data-testid="sub-to-newsletter"]').click();
    cy.get('button').contains('Request a demo').click();
    cy.contains("We'll be in touch");
  });

  it('has a flow for rejecting users who use unsupported SCMs', () => {
    cy.visit('');

    cy.contains('Request a demo').click();
    cy.get('#request-demo-name-input').type('Peter pan');
    cy.get('#request-demo-email-input').type('test@example.com');
    cy.get('#request-demo-scm-gitlab-cloud-input').check();
    cy.contains('Request a demo').click();
    cy.contains('Roadie only supports GitHub for now');
  });
});
