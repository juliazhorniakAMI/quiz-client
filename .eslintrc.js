module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'react-app',
    'react-app/jest',
  ],
  plugins: ['prettier'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'react-hooks/exhaustive-deps': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
};
