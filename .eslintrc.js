module.exports = {
  env: {
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2015,
    sourceType: 'module',
    project: {
      extends: './tsconfig.json',
      include: ['./src/**/*']
    }
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'no-console': 1,
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'comma-dangle': ['error', 'never'],
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreComments: true,
        ignoreUrls: true,
        code: 120
      }
    ],
    'react/prop-types': 0,
    'react/no-unused-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'react/jsx-boolean-value': 0,
    'no-unused-vars': [2, { varsIgnorePattern: '(^_)', argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': [2, { varsIgnorePattern: '(^_)', argsIgnorePattern: '^_' }],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'no-nested-ternary': 0,
    'implicit-arrow-linebreak': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/role-has-required-aria-props': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/camelcase': 0
  }
};
