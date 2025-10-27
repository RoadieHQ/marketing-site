import js from '@eslint/js';
import { fixupPluginRules, fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';
import jest from 'eslint-plugin-jest';
import cypress from 'eslint-plugin-cypress';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const isCI = process.env.CI === 'true';

export default [
  // Base config for all files
  {
    ignores: [
      'node_modules/**',
      '.cache/**',
      'public/**',
      'static/**',
      '.netlify/**',
      'coverage/**',
      'cypress/downloads/**',
      'cypress/screenshots/**',
      'cypress/fixtures/**',
    ],
  },

  // Apply recommended configs first
  ...fixupConfigRules(compat.extends('plugin:react/recommended')),
  ...fixupConfigRules(compat.extends('plugin:import/errors')),
  ...fixupConfigRules(compat.extends('plugin:import/warnings')),
  ...fixupConfigRules(compat.extends('plugin:jsx-a11y/recommended')),

  // Apply to all JS/JSX/MJS files (override recommended configs)
  {
    files: ['**/*.js', '**/*.jsx', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
        __PATH_PREFIX__: 'readonly',
      },
    },
    rules: {
      'react/prop-types': 0,
      'no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
      }],
      'import/no-unused-modules': 'off', // Can be expensive on large codebases
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          moduleDirectory: ['node_modules', 'src'],
        },
      },
    },
  },

  // Jest test files
  {
    files: ['**/*.test.js', '**/*.test.mjs', '**/*.spec.js'],
    ignores: ['cypress/**'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest: fixupPluginRules(jest),
    },
    rules: {
      ...jest.configs.recommended.rules,
      'jest/no-focused-tests': isCI ? 'error' : 'warn',
    },
  },

  // Cypress test files
  {
    files: ['cypress/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        cy: 'readonly',
        Cypress: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        expect: 'readonly',
        assert: 'readonly',
        context: 'readonly',
        specify: 'readonly',
      },
    },
    plugins: {
      cypress: fixupPluginRules(cypress),
    },
    rules: {
      ...cypress.configs.recommended.rules,
      'cypress/no-unnecessary-waiting': 'warn',
    },
  },
];
