module.exports = {
  env: {
    browser: true,
    es2020: true,
    // Some files like gatsby-node.js run in the node env.
    node: true,
  },

  extends: ['eslint:recommended', 'plugin:react/recommended'],

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

  plugins: ['react'],

  rules: {
    'react/prop-types': 0,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
