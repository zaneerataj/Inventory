module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  ignorePatterns: ['dist'], // Removed `.eslintrc.cjs` from ignorePatterns as it's not necessary

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended', // Optionally, if you need accessibility rules
    'prettier',
  ],

  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'react-refresh',
  ],

  rules: {
    'react/prop-types': 'off', // Disable if not using prop-types
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-default': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Adjust based on your preferences
  },

  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};
