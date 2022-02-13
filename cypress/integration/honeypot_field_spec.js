describe('The honeypot field', () => {
  it('should protect us from request demo spam', () => {
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

  it('should protext us from free trial spam', () => {
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 200,
    });

    cy.visit('');
    cy.contains('Try it free').click();
    cy.url().should('contain', '/free-trial/');

    cy.get('#get-instance-email-input').type('test@example.com');
    cy.get('#honeybot-field').type('Something here', { force: true });
    cy.get('button[name="agree-to-policies"]').click();
    cy.contains('Request a trial').click();
    cy.contains('Your Backstage experience is on the way');
  });

  it('should protect us from enterprise pricing spam', () => {
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 200,
    });

    cy.visit('');
    cy.contains('Pricing').click();
    cy.contains('Get a quote').click();

    cy.get('#request-pricing-name-input').type('Test 1');
    cy.get('#honeybot-field').type('Something here', { force: true });
    cy.get('#request-pricing-email-input').type('test@example.com');
    cy.get('#request-pricing-number-of-engineers').select('201');
    cy.contains('Request a quote').click();
    cy.contains(`We'll be in touch`);
  });

  it('should protext us from teams early access spam', () => {
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 200,
    });

    cy.visit('');
    cy.contains('Pricing').click();
    cy.contains('Request early access').click();

    cy.get('#request-teams-name-input').type('Test 1');
    cy.get('#honeybot-field').type('Something here', { force: true });
    cy.get('#request-teams-email-input').type('test@example.com');
    cy.contains('Request early access').click();
    cy.contains(`We'll be in touch`);
  });
});
