describe('The landing page', () => {
  it('has a form which can be submitted to get a demo', () => {
    // We have to stub beause netlify forms don't work in this environment.
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 200,
    });

    cy.visit('');
    cy.get('#get-demo-email-input').type('test@example.com');
    cy.get('#get-demo-email-button').click();
    cy.contains('Fantastic');
  });

  it('displays an error when form submission fails', () => {
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 404,
    });

    cy.visit('');
    cy.get('#get-demo-email-input').type('test@example.com');
    cy.get('#get-demo-email-button').click();
    cy.contains('Something went wrong');
  });
});
