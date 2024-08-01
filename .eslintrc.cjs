/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
