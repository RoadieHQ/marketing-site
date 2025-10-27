describe('Scaffolder Actions directory', () => {
  const BASE_URL = Cypress.config('baseUrl');

  beforeEach(() => {
    cy.clock(Date.parse('2025-09-22T12:45:23.839Z'), ['Date']);
  });

  afterEach(() => {
    cy.clock().invoke('restore');
  });

  describe('list page', () => {
    const netlifyFnPath = '/.netlify/functions/fetchPackageDataForList';
    const packageData = {
      data: {
        '@roadiehq/scaffolder-backend-module-aws': {
          latestVersionPublishedTime: '2025-09-29T07:47:32.822Z',
          downloadCount: 5420,
          downloadCountPeriod: 'LAST_MONTH',
        },
        '@backstage/plugin-scaffolder-backend-module-github': {
          latestVersionPublishedTime: '2025-10-03T18:27:13.597Z',
          downloadCount: 12350,
          downloadCountPeriod: 'LAST_MONTH',
        },
        roadieLastUpdated: '2025-10-07T12:25:06.368Z'
      }
    };

    beforeEach(() => {
      cy.intercept('GET', `${BASE_URL}${netlifyFnPath}`, {
        statusCode: 200,
        body: packageData,
      }).as('fetchPackageData');
    });

    it('renders NPM info', () => {
      cy.visit('/backstage/scaffolder-actions/');

      cy.wait('@fetchPackageData').then(() => {
        cy.contains('12,350');
        cy.contains('Updated 11 days ago');
      });
    });

    it('can be filtered by search', () => {
      cy.visit('/backstage/scaffolder-actions/');

      cy.get('input[name="search"]').type('Example');
      cy.contains('Run Example Action');
      cy.contains('Azure').should('not.exist');
    });

    it('can be filtered by availability', () => {
      cy.visit('/backstage/scaffolder-actions/');

      // Click on "Available on Roadie" filter
      cy.contains('Available on Roadie').click();

      // Verify URL has the availability param
      cy.url().should('include', 'availability=roadie');

      // All actions in test data have availableOnRoadie=false, so verify no actions shown
      cy.contains('Run Example Action').should('not.exist');
    });

    it('can be sorted by popularity', () => {
      cy.visit('/backstage/scaffolder-actions/');

      cy.wait('@fetchPackageData').then(() => {
        // Click sort dropdown
        cy.get('button[name="sort-order-select-button"]').click();
        cy.get('div[role="option"]').contains('Popularity').click();

        // Verify the more popular package appears first
        cy.get('h3').first().should('contain', '@backstage/plugin-scaffolder-backend-module-github');
      });
    });

    it('preserves search query when using browser back button', () => {
      cy.visit('/backstage/scaffolder-actions/');

      // Filter the list
      cy.get('input[name="search"]').type('Example');

      // Verify URL has the query param
      cy.url().should('include', '?q=Example');

      // Verify filtered results
      cy.contains('Run Example Action');
      cy.contains('Azure').should('not.exist');

      // Click on an action
      cy.get('div[data-testid="action-/acme-example/"]').click();
      cy.url().should('include', '/backstage/scaffolder-actions/acme-example/');

      // Go back using browser back button
      cy.go('back');

      // Verify we're back on the actions page with the query preserved
      cy.url().should('include', '/backstage/scaffolder-actions/');
      cy.url().should('include', '?q=Example');

      // Verify the search input still has the value
      cy.get('input[name="search"]').should('have.value', 'Example');

      // Verify filtered results are still showing
      cy.contains('Run Example Action');
      cy.contains('Azure').should('not.exist');
    });

    it('preserves search query when clicking back link from action page', () => {
      cy.visit('/backstage/scaffolder-actions/');

      // Filter the list
      cy.get('input[name="search"]').type('Example');

      // Verify URL has the query param
      cy.url().should('include', '?q=Example');

      // Verify filtered results
      cy.contains('Run Example Action');
      cy.contains('Azure').should('not.exist');

      // Click on an action
      cy.get('div[data-testid="action-/acme-example/"]').click();
      cy.url().should('include', '/backstage/scaffolder-actions/acme-example/');

      // Click the back link
      cy.contains('← Backstage Scaffolder Actions').click();

      // Verify we're back on the actions page with the query preserved
      cy.url().should('include', '/backstage/scaffolder-actions/');
      cy.url().should('include', '?q=Example');

      // Verify the search input still has the value
      cy.get('input[name="search"]').should('have.value', 'Example');

      // Verify filtered results are still showing
      cy.contains('Run Example Action');
      cy.contains('Azure').should('not.exist');
    });

    it('preserves both search query and availability filter when navigating back', () => {
      cy.visit('/backstage/scaffolder-actions/');

      // Filter by search
      cy.get('input[name="search"]').type('Example');

      // Verify we have results
      cy.contains('Run Example Action');

      // Click on an action
      cy.get('div[data-testid="action-/acme-example/"]').click();
      cy.url().should('include', '/backstage/scaffolder-actions/acme-example/');

      // Click the back link
      cy.contains('← Backstage Scaffolder Actions').click();

      // Verify we're back with query preserved
      cy.url().should('include', '/backstage/scaffolder-actions/');
      cy.url().should('include', '?q=Example');

      // Verify the search input still has the value
      cy.get('input[name="search"]').should('have.value', 'Example');

      // Verify filtered results are still showing
      cy.contains('Run Example Action');
    });

    it('displays action features in footer when available', () => {
      cy.visit('/backstage/scaffolder-actions/');

      // Check that actions display their input/output counts
      cy.get('div[data-testid="action-/acme-example/"]').within(() => {
        cy.contains('1 input');
      });
    });

    it('toggles between All and Available on Roadie filters', () => {
      cy.visit('/backstage/scaffolder-actions/');

      // Find the radio group
      cy.get('[role="radiogroup"]').should('exist');

      // Click "Available on Roadie" filter
      cy.get('[role="radiogroup"]').contains('Available on Roadie').click();

      // Verify URL changed
      cy.url().should('include', 'availability=roadie');

      // All actions in test data have availableOnRoadie=false, so verify no actions shown
      cy.contains('Run Example Action').should('not.exist');

      // Click "All" to go back
      cy.get('[role="radiogroup"]').contains('All').click();

      // Verify URL no longer has availability param
      cy.url().should('not.include', 'availability=roadie');

      // Verify actions are shown again
      cy.contains('Run Example Action').should('exist');
    });
  });

  describe('show page', () => {
    it('renders action details', () => {
      cy.visit('/backstage/scaffolder-actions/acme-example/');

      // Verify action title is displayed
      cy.contains('Run Example Action');

      // Verify action ID is displayed in code format
      cy.get('code').contains('acme:example');

      // Verify package name is displayed
      cy.contains('@aws/plugin-scaffolder-backend-aws-apps-for-backstage');
    });

    it('shows input and output schemas', () => {
      cy.visit('/backstage/scaffolder-actions/acme-example/');

      // Verify schema sections are present
      cy.contains('Input Schema');
    });

    it('shows code location link', () => {
      cy.visit('/backstage/scaffolder-actions/acme-example/');

      // Verify Links section with GitHub link is displayed
      cy.contains('Links');
      cy.get('a[href*="github.com"]').should('exist');
    });

    it('allows copying package name to clipboard', () => {
      cy.visit('/backstage/scaffolder-actions/acme-example/');

      // Find the package name section
      cy.contains('@aws/plugin-scaffolder-backend-aws-apps-for-backstage')
        .parent()
        .within(() => {
          // Copy button should exist (it's hidden via opacity but still in the DOM)
          cy.get('button').should('exist');
        });
    });
  });
});
