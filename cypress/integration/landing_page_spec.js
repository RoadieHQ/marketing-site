describe('The landing page', () => {
  it('has a flow for requesting a demo', () => {
    // We have to stub beause netlify forms don't work in this environment.
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 200,
    });

    cy.visit('');
    cy.contains('Request a demo').click();

    cy.get('#request-demo-name-input').type('Mary Mac');
    cy.get('#request-demo-email-input').type('test@example.com');
    cy.get('[name="sub-to-newsletter"]').click();
    cy.get('button').contains('Request a demo').click();
    cy.contains("We'll be in touch");
  });

  it('has a flow for getting a free trial', () => {
    // We have to stub beause netlify forms don't work in this environment.
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 200,
    });

    cy.visit('');
    cy.contains('Try it free').click();
    cy.url().should('contain', '/free-trial/');

    cy.get('#get-instance-email-input').type('test@example.com');
    cy.get('[name="agree-to-policies"]').click();
    cy.contains('Request a trial').click();
    cy.contains('Your Backstage experience is on the way');
  });

  it('has a flow for rejecting users who use unsupported SCMs', () => {
    // We have to stub beause netlify forms don't work in this environment.
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 200,
    });

    cy.visit('');
    cy.contains('Try it free').click();
    cy.url().should('contain', '/free-trial/');

    cy.get('#get-instance-email-input').type('test@example.com');
    // This is a custom CSS checkbox which is technically invisble. Cypress
    // complains so we have to force it.
    cy.get('#get-instance-scm-bitbucket-cloud-input').check({ force: true });
    cy.get('[name="agree-to-policies"]').click();
    cy.contains('Request a trial').click();
    cy.contains('Roadie only supports GitHub Cloud for now');
  });
});
