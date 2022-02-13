describe('The honeypot field', () => {
  it('should protect us from spam', () => {
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 200,
    });

    cy.visit('');
    cy.contains('Request a demo').click();

    cy.get('#request-demo-name-input').type('Mary Mac');
    cy.get('#honeybot-field').type('Something here', { force: true });
    cy.get('#request-demo-email-input').type('test@example.com');
    cy.get('button[name="sub-to-newsletter"]').click();
    cy.get('button').contains('Request a demo').click();
    cy.contains("We'll be in touch");
  });
});
