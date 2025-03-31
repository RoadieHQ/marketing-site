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
    cy.get('#reported-attribution').type('Newsletter');
    cy.get('button[data-testid="sub-to-newsletter"]').click();
    cy.get('button').contains('Request a demo').click();
    cy.contains("We'll be in touch");
  });

  it('has a flow for users who use choose other', () => {
    cy.visit('');
    cy.contains('Get a Demo').click();

    cy.get('#request-demo-name-input').type('Mary Mac');
    cy.get('#request-demo-email-input').type('test@example.com');
    cy.get('#scm').select('Other');
    cy.contains('Request a demo').click();
    cy.contains(`be in touch to learn more`);
  });
});
