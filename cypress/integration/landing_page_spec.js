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

  it('has a flow for getting a free trial', () => {
    cy.visit('');

    cy.get('#get-instance-email-input').type('test@example.com');
    cy.get('#scm').select('github-on-prem');
    cy.contains('Try Roadie Backstage').click();
    cy.contains('Thank you for requesting a free trial of Roadie Backstage');
  });

  it('has a flow for rejecting users who use unsupported SCMs', () => {
    cy.visit('');

    cy.get('#get-instance-email-input').type('test@example.com');
    cy.get('#scm').select('gitlab-on-prem');
    cy.contains('Try Roadie Backstage').click();
    cy.contains('Roadie only supports GitHub for now');
  });
});
