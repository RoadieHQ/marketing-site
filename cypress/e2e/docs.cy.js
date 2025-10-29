describe('The documentation', () => {
  it('is accessible from the footer and searchable', () => {
    cy.visit('');
    cy.get('#sitewide-footer-documentation').click();
    cy.contains('Explore our guides and examples');

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

  describe('sidebar navigation', () => {
    it('renders external links with icon and target="_blank"', () => {
      // Navigate to a page with the Actions Directory external link
      cy.visit('/docs/scaffolder/writing-templates/');

      // Find the "Actions Directory" link in the sidebar
      cy.contains('nav a', 'Actions Directory').as('externalLink');

      // Verify the link has target="_blank"
      cy.get('@externalLink').should('have.attr', 'target', '_blank');

      // Verify the link has rel="noopener noreferrer"
      cy.get('@externalLink').should('have.attr', 'rel', 'noopener noreferrer');

      // Verify the external link icon is present (ExternalLinkIcon from Heroicons)
      cy.get('@externalLink').find('svg').should('exist');
      cy.get('@externalLink').find('svg').should('have.class', 'h-3');
      cy.get('@externalLink').find('svg').should('have.class', 'w-3');
    });

    it('renders regular links without external attributes', () => {
      cy.visit('/docs/scaffolder/writing-templates/');

      // Find a regular (non-external) link in the sidebar
      cy.contains('nav a', 'Overview').as('regularLink');

      // Verify the link does NOT have target="_blank"
      cy.get('@regularLink').should('not.have.attr', 'target', '_blank');

      // Verify the link does NOT have an external icon
      cy.get('@regularLink').find('svg').should('not.exist');
    });

    it('external links point to the correct URL', () => {
      cy.visit('/docs/scaffolder/writing-templates/');

      // Verify the Actions Directory link points to the correct path
      cy.contains('nav a', 'Actions Directory')
        .should('have.attr', 'href')
        .and('include', '/backstage/scaffolder-actions/');
    });
  });
});
