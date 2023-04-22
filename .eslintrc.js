module.exports = {
  extends: ['next/core-web-vitals'],
  env: {},
  globals: {
    jsx: true,
    global: true,
  },
  plugins: ['prettier'],

  rules: {
    quotes: ['error', 'single'],
    'prefer-const': 1,
    'no-duplicate-imports': 0,
    'array-bracket-spacing': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/ban-types': 0,
    'react/no-unknown-property': 0,
  },
}
