const namingConventionConfig = [
  {
    selector: 'default',
    format: ['camelCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'allow',
  },
  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },
  {
    selector: 'function',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
  },
  {
    selector: 'objectLiteralProperty',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
  },
  // custom rule for properties starting with a number
  {
    selector: 'objectLiteralProperty',
    format: null, // Disable format checking
    filter: {
      // Regular expression to match property names starting with a number
      regex: '^[0-9].*',
      match: true,
    },
  },
  {
    selector: 'variable',
    format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'allow',
  },
  {
    selector: 'parameter',
    format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'allow',
  },
  {
    selector: 'typeProperty',
    format: ['camelCase', 'UPPER_CASE'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'allow',
  },
];

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'json-format', 'prettier'],
  extends: [
    'react-app',
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'function-declaration',
      },
    ],
    curly: [2, 'all'],
    'no-underscore-dangle': 0,
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 0,
    'click-events-have-key-events': 0,
    radix: 0,
    'no-useless-escape': 'off',
    'no-script-url': 'off',
    'no-template-curly-in-string': 'off',
    'react/prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'linebreak-style': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-danger': 0,
    'react/forbid-prop-types': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'import/no-unresolved': 0,
    'no-console': 0,
    'react/no-multi-comp': 0,
    'react/no-array-index-key': 0,
    'no-unused-vars': 0,
    'react/jsx-props-no-spreading': 0,
    'no-nested-ternary': 0,
    'react/react-in-jsx-scope': 0,
    'sort-imports': 0,
    'node/no-missing-import': 0,
    'node/no-unsupported-features/node-builtins': 0,
    'node/no-unsupported-features/es-builtins': 0,
    'node/no-unsupported-features/es-syntax': 0,
    'regexp/no-unused-capturing-group': 0,
    'prefer-let/prefer-let': 0,
    'no-invalid-this': 0,
    'no-shadow': 0,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/naming-convention': [2, ...namingConventionConfig],
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    // todo - remove below
    '@typescript-eslint/no-unsafe-member-access': 0,
    'no-unsafe-any': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'arrow-body-style': 0,
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'default-case': 0,
    'consistent-return': 0,
    'react/destructuring-assignment': 0,
    'no-await-in-loop': 0,
    'react/no-access-state-in-setstate': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      legacyDecorators: true,
    },
    extraFileExtensions: ['.json', '.less', '.md'],
  },
  ignorePatterns: ['.eslintrc.js', 'README.md', 'craco.config.js', 'runtimeConfig.js'],
  settings: {
    'json/sort-package-json': 'standard',
  },
};
