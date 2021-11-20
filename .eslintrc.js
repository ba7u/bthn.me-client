module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  root: true,
  rules: {
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    'no-console': 'error',
    'object-shorthand': ['error', 'properties'],
    '@typescript-eslint/no-var-requires': 0,
    'no-irregular-whitespace': 'off',
    // TODO-FE[TPNX-2309] - Remove these once fixed
    'no-lonely-if': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-extra-boolean-cast': 'error',
    'no-prototype-builtins': 'error',
    'no-global-assign': 'error',
    'react/self-closing-comp': 'error',
    'prefer-const': 'error',
    'no-unneeded-ternary': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        'no-duplicate-imports': 'error',
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: true,
          },
        ],
        '@typescript-eslint/no-duplicate-imports': ['error'],
        '@typescript-eslint/no-var-requires': 1,
        'no-console': 'error',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: ['variable', 'function'],
            modifiers: ['exported'],
            format: ['PascalCase', 'camelCase'],
            filter: {
              regex: '^(use|backend|api|config|feature)',
              match: false,
            },
          },
        ],
      },
    },
  ],
};
