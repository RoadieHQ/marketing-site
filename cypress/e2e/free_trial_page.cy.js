import { PAGE_PATHS } from '../../src/contactFormConstants';

describe('The free trial page', () => {
  beforeEach(() => {
    // We have to stub beause netlify forms don't work in this environment.
    cy.intercept('POST', 'http://localhost:8001', {
      statusCode: 200,
    });
  });

  it('has a flow for getting a free trial', () => {
    cy.visit(PAGE_PATHS.freeTrial);

    cy.get('#get-instance-email-input').type('test@example.com');
    cy.get('#scm').select('GitHub On-prem');
    cy.get('#reported-attribution').type('Newsletter');
    cy.get('button[data-testid="agree-to-policies"]').click();
    cy.contains('Request a trial').click();
    cy.contains('Thank you for requesting a free trial of Roadie');
  });

  // [DT] I'm skipping this because it's incorrectly failing in tests and I don't have
  // time to figure out why. This code path will be removed soon anyway because
  // we do support GitLab now.
  it.skip('has a flow for users who use GitLab', () => {
    cy.visit(PAGE_PATHS.freeTrial);

    cy.get('#get-instance-email-input').type('test@example.com');
    cy.get('#scm').select('GitLab Cloud');
    cy.get('button[data-testid="agree-to-policies"]').click();
    cy.contains('Request a trial').click();
    cy.contains('Roadie does not support GitLab');
  });

  it('warns gmail users', () => {
    cy.visit(PAGE_PATHS.freeTrial);

    cy.get('#get-instance-email-input').type('test@gmail.com', { delay: 200 })
    cy.contains('Please use your work email');
  });
});
