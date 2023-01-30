describe('The landing page', () => {
  beforeEach(() => {
    // We have to stub beause netlify forms don't work in this environment.
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 200,
    });
  });

  it('has a flow for requesting a demo', () => {
    cy.visit('');
    cy.contains('Get a Demo').click();

    cy.get('#request-demo-name-input').type('Mary Mac');
    cy.get('#request-demo-email-input').type('test@example.com');
    cy.get('button[data-testid="sub-to-newsletter"]').click();
    cy.get('button').contains('Request a demo').click();
    cy.contains("We'll be in touch");
  });

  it('has a flow for users who use GitLab', () => {
    cy.visit('');
    cy.contains('Get a Demo').click();

    cy.get('#request-demo-name-input').type('Mary Mac');
    cy.get('#get-instance-email-input').type('test@example.com');
    cy.get('#scm').select('Gitlab Cloud');
    cy.get('button[data-testid="agree-to-policies"]').click();
    cy.contains('Request a trial').click();
    cy.contains('Roadie does not support GitLab at the moment');
  });

  it('has a flow for users who use unsupported SCMs', () => {
    cy.visit('');
    cy.contains('Get a Demo').click();

    cy.get('#request-demo-name-input').type('Mary Mac');
    cy.get('#get-instance-email-input').type('test@example.com');
    cy.get('#scm').select('Bitbucket Cloud');
    cy.get('button[data-testid="agree-to-policies"]').click();
    cy.contains('Request a trial').click();
    cy.contains('Roadie support for Bitbucket Cloud is in beta');
  });
});
