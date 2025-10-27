const isCI = process.env.CI === 'true';

module.exports = {
  env: {
    browser: true,
    es2020: true,
    // Some files like gatsby-node.js run in the node env.
    node: true,
    jest: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:cypress/recommended',
    'plugin:jest/recommended',
  ],

  globals: {
    __PATH_PREFIX__: 'readonly',
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    ecmaVersion: 11,
    sourceType: 'module',
  },

  plugins: ['react', 'jest'],

  rules: {
    'react/prop-types': 0,
  },

  overrides: [
    {
      // Apply Jest rules to all test files (both Jest and Cypress)
      files: ['**/*.test.js', '**/*.test.mjs', '**/*.spec.js', 'cypress/**/*.js'],
      rules: {
        // Fail on focused tests (.only) in CI, warn locally
        'jest/no-focused-tests': isCI ? 'error' : 'warn',
      },
    },
  ],

  settings: {
    react: {
      version: 'detect',
    },

    'import/resolver': {
      node: {
        moduleDirectory: [
          'node_modules',
          // Allows importing from the ./src directory without long relative paths. The
          // gatsby-plugin-module-resolver is related to this config. See gatsby-config.js
          'src',
        ],
      },
    },
  },
};
