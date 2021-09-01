module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:jest-formatting/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
    jest: true,
    'react-native/react-native': true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['jest', 'jest-formatting', 'react-hooks', '@typescript-eslint'],
  ignorePatterns: ['lib'],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/camelcase': 'off',
    'react-native/no-raw-text': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescipt-eslint/explicit-function-return-type': 'off',
    'react-native/sort-styles': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-string-refs': 'off',
    'react/jsx-key': 'off',
    'no-self-assign': 'off',
    'jest/no-jasmine-globals': 'error',
    'no-useless-escape': 'off',
    'import/no-duplicates': 'off',
    'jest-formatting/padding-around-expect-groups': 'off',
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    semi: [2, 'never'],
  },
}
