describe('The landing page', () => {
  it('has a link to request a demo', () => {
    cy.visit('');
    cy.contains('Request a demo');
  });

  it('has a form which people can use to get an instance', () => {
    cy.visit('');
    cy.get('#get-instance-email-input').type('test@example.com');
    cy.get('#get-instance-email-button').click();
    cy.url().should('contain', '/get-instance/?referred_email');
  });
});
