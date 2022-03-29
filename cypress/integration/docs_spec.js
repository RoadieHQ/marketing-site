describe('The documentation', () => {
  it('is accessible from the footer and searchable', () => {
    cy.visit('');
    cy.get('#sitewide-footer-documentation').click();
    cy.contains('Installing the GitHub App');

    // Matching on class names is not ideal, because an upgrade of the algolia autocomplete
    // library could break the test. Matching on IDs was considered, but the IDs are dynamic
    // and depend on the number of autocomplete elements on the page. They increment automatically.
    // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-js/autocomplete/#parameters
    cy.get('.aa-DetachedSearchButton').click();
    cy.get('.aa-Input').type('github');

    cy.get('[data-testid="algolia-search-result-link--docs-integrations-github-token-"]').click();
    // This is obviously brittle, but we should test that we actually got to the right page.
    cy.contains('Creating a token');
  });
});
