import baseConfig from '../../eslint.config.mjs';
import * as jsoncParser from 'jsonc-eslint-parser';

export default [
  ...baseConfig.filter(
    (config) =>
      !(config.ignores && !config.files && config.ignores.includes('**/*'))
  ),
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
