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

  it('has a flow for users who use GitLab', () => {
    cy.visit('/free-trial/');

    cy.get('#get-instance-email-input').type('test@example.com');
    cy.get('#scm').select('GitLab Cloud');
    cy.get('button[data-testid="agree-to-policies"]').click();
    cy.contains('Request a trial').click();
    cy.contains('Roadie only offers experimental support GitLab');
  });

  it('has a flow for users who use unsupported SCMs', () => {
    cy.visit('/free-trial/');

    cy.get('#get-instance-email-input').type('test@example.com');
    cy.get('#scm').select('Bitbucket Cloud');
    cy.get('button[data-testid="agree-to-policies"]').click();
    cy.contains('Request a trial').click();
    cy.contains('Roadie support for Bitbucket Cloud is in beta');
  });

  it('warns gmail users', () => {
    cy.visit('/free-trial/');

    cy.get('#get-instance-email-input').type('test@gmail.com');
    cy.contains('Please use your work email');
  });
});
