import baseConfig from '../../eslint.config.mjs';
import nxPlugin from '@nx/eslint-plugin';
import * as jsoncParser from 'jsonc-eslint-parser';

export default [
  ...baseConfig.filter(
    (config) =>
      !(config.ignores && !config.files && config.ignores.includes('**/*'))
  ),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {},
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {},
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {},
  },
  {
    files: ['package.json', 'generators.json', 'executors.json'],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      '@nx/nx-plugin-checks': 'error',
    },
  },
];
