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
    cy.get('button[name="sub-to-newsletter"]').click();
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
    cy.get('button[name="agree-to-policies"]').click();
    cy.get('button[name="sub-to-newsletter"]').click();
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
    cy.get('button[name="agree-to-policies"]').click();
    cy.get('button[name="sub-to-newsletter"]').click();
    cy.contains('Request a trial').click();
    cy.contains('Roadie only supports GitHub Cloud for now');
  });

  it('has a flow for getting enterprise pricing', () => {
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 200,
    });

    cy.visit('');
    cy.contains('Pricing').click();
    cy.contains('Get a quote').click();

    cy.get('#request-pricing-name-input').type('Test 1');
    cy.get('#request-pricing-email-input').type('test@example.com');
    cy.get('#request-pricing-number-of-engineers').select('201');
    cy.get('button[name="sub-to-newsletter"]').click();
    cy.contains('Request a quote').click();
    cy.contains(`We'll be in touch`);
  });

  it('has a flow for requesting teams early access', () => {
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 200,
    });

    cy.visit('');
    cy.contains('Pricing').click();
    cy.contains('Request early access').click();

    cy.get('#request-teams-name-input').type('Test 1');
    cy.get('#request-teams-email-input').type('test@example.com');
    cy.get('button[name="sub-to-newsletter"]').click();
    cy.contains('Request early access').click();
    cy.contains(`We'll be in touch`);
  });
});
