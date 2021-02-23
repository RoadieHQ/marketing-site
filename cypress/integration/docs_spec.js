describe('The documentation', () => {
  it('is accessible from the footer', () => {
    cy.visit('');
    cy.get('#sitewide-footer-documentation').click();
    cy.contains('Getting Started');
  });
});
