describe('The landing page', () => {
  it('has a link to a Typeform waitlist', () => {
    cy.visit('');
    cy.contains('Request a demo');
  });
});
