describe('Plugins directory', () => {
  const BASE_URL = Cypress.config('baseUrl');

  beforeEach(() => {
    cy.clock(Date.parse('2025-09-22T12:45:23.839Z'), ['Date']);
  });

  afterEach(() => {
    cy.clock().invoke('restore');
  });

  describe('list page', () => {
    const netlifyFnPath = '/.netlify/functions/fetchNpmDataForList';
    const npmData = {
      data: {
        '@roadiehq/rag-ai': {
          latestVersionPublishedTime: '2025-09-29T07:47:32.822Z',
          lastMonthDownloads: 13619
        },
        '@backstage/plugin-api-docs': {
          latestVersionPublishedTime: '2025-10-03T18:27:13.597Z',
          lastMonthDownloads: 14550
        },
        roadieLastUpdated: '2025-10-07T12:25:06.368Z'
      }
    };

    beforeEach(() => {
      cy.intercept('GET', `${BASE_URL}${netlifyFnPath}`, {
        statusCode: 200,
        body: npmData,
      }).as('fetchNpmData');
    });

    it('renders NPM info', () => {
      cy.visit('/backstage/plugins/');

      cy.wait('@fetchNpmData').then(() => {
        cy.get('div[data-test-id="plugin-api-docs"]')
          .contains('14,550');
        cy.get('div[data-test-id="plugin-api-docs"]')
          .contains('Updated 11 days ago');
      });
    });

    it('can be filtered', () => {
      cy.visit('/backstage/plugins/');

      cy.get('input[name="search"]').type('API');
      cy.contains('API Docs');
      cy.contains('AI Assistant').should('not.exist');
    });

    it('can be filterd by category', () => {
      cy.visit('/backstage/plugins/');

      cy.get('input[name="filter-categories-input"]').type('Know');
      cy.get('div[role="option"]').contains('Knowledge Sharing & Curation').click();
      cy.contains('AI Assistant');
      cy.contains('API Docs').should('not.exist');
    });

    it('can be sorted by popularity', () => {
      cy.visit('/backstage/plugins/');
      const testCasePluginTitles = ['AI Assistant', 'API Docs'];
      const startingOrder = ['AI Assistant', 'API Docs'];
      const expectedOrder = ['API Docs', 'AI Assistant'];

      cy.get('div[data-test-id^="plugin-"] h2').then(($els) => {
        const texts = [...$els].map(el => el.innerText.trim()).filter((text) => (
          testCasePluginTitles.includes(text)
        ));
        expect(texts).to.deep.equal(startingOrder);
      });

      cy.get('button[name="sort-order-button"]').click();
      cy.get('div[role="option"]').contains('Popularity').click();
      cy.get('div[data-test-id^="plugin-"] h2').then(($els) => {
        const texts = [...$els].map(el => el.innerText.trim()).filter((text) => (
          testCasePluginTitles.includes(text)
        ));
        console.log('texts', texts);
        expect(texts).to.deep.equal(expectedOrder);
      });
    });
  });

  describe('show page', () => {
    const npmData = {
      _id: '@roadiehq/backstage-plugin-argo-cd',
      _rev: '146-56e841ce37f8b7cfbaf7f6a070ef29e1',
      name: '@roadiehq/backstage-plugin-argo-cd',
      license: 'Apache-2.0',
      repository: {
        type: 'git',
        url: 'github:RoadieHQ/roadie-backstage-plugins',
        directory: 'plugins/frontend/backstage-plugin-argo-cd',
      },
      time: {
        created: '2020-12-07T02:46:53.764Z',
        modified: '2025-08-28T07:10:36.321Z',
        '2.11.0': '2025-08-28T07:10:36.025Z',
      },
      homepage: 'https://roadie.io/backstage/plugins/argo-cd/',
      bugs: {
        url: 'https://github.com/RoadieHQ/roadie-backstage-plugins/issues',
        email: 'support@roadie.io',
      },
      backstage: {
        role: 'frontend-plugin',
        pluginId: 'argocd',
        pluginPackages: [
          '@roadiehq/backstage-plugin-argo-cd',
          '@roadiehq/backstage-plugin-argo-cd-backend',
        ],
        features: {
          './alpha': '@backstage/FrontendPlugin',
        },
      },
      maintainers: [
        {
          name: 'roadiehq-david',
          email: 'david@roadie.io',
        },
        {
          name: 'samnixon87',
          email: 'sam.nixon@roadie.io',
        },
      ],
      numberOfMaintainers: 2,
      numberOfVersions: 125,
      latestVersion: '2.11.0',
      roadieLastUpdated: '2025-09-22T12:45:23.839Z',
    };
    const netlifyFnPath = '/.netlify/functions/fetchNpmDataByName';

    it('renders NPM info', () => {
      cy.intercept('GET', `${BASE_URL}${netlifyFnPath}?packageName=${npmData.name}`, {
        statusCode: 200,
        body: {
          data: npmData,
        },
      }).as('fetchNpmData');

      cy.visit('/backstage/plugins/argo-cd/');

      cy.wait('@fetchNpmData').then(() => {
        cy.get('#npm-detail-version').contains(npmData.latestVersion);
        cy.get('#npm-detail-last-published').contains('25 days ago');
      });
    });

    it('should not show the NPM panels but should show the rest of the content', () => {
      cy.intercept('GET', `${BASE_URL}${netlifyFnPath}?packageName=${npmData.name}`, {
        statusCode: 500,
      }).as('fetchNpmData');

      cy.visit('/backstage/plugins/argo-cd/');

      cy.wait('@fetchNpmData').then(() => {
        cy.contains('Created by Roadie, in collaboration with American Airlines');
        cy.get('#npm-detail-last-published').should('not.exist');
      });
    });
  });
});
