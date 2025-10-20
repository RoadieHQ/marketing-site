describe('useEffect', () => {
  it('should work', () => {
    cy.visit('/test/');
    cy.get('#test').contains('Client');
  });
});
