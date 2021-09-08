describe('The landing page', () => {
  it('has a link to request a demo', () => {
    cy.visit('');
    cy.contains('Request a demo');
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
    // This is a custom CSS checkbox which is technically invisble. Cypress
    // complains so we have to force it.
    cy.get('#get-instance-scm-bitbucket-cloud-input').check({ force: true });
    cy.get('#get-instance-sub-to-newsletter-input').uncheck({ force: true });
    cy.contains('Start your trial').click();
    cy.contains('Our Roadies will get busy');
  });
});
