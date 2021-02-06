const path = require('path');
const camelcase = require('camelcase');
const jest = require('jest');
const { appSetupTestsFile, appSrc } = require('../config/paths');


const config = {
  resetMocks: true,
  testEnvironment: 'jsdom',
  testRunner: require.resolve('jest-circus/runner'),
  setupFiles: [require.resolve('react-app-polyfill/jsdom')],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': require.resolve('./jestUtils/babelTransform.js'),
    '^.+\\.css$': require.resolve('./jestUtils/cssTransform.js'),
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': require.resolve('./jestUtils/fileTransform.js'),
  },

  // collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  // watchPlugins: [
  //   'jest-watch-typeahead/filename',
  //   'jest-watch-typeahead/testname',
  // ],
  // testMatch: [
  //   '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
  //   '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  // ],
  // setupFilesAfterEnv: appSetupTestsFile || [],
  // transform: {
  //   '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': babelTransform,
  //   '^.+\\.css$': cssTransform,
  //   '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': fileTransform,
  // },
  // transformIgnorePatterns: [
  //   '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
  //   '^.+\\.module\\.(css|sass|scss)$',
  // ],
  // modulePaths: [],
  // // modulePaths: modules.additionalModulePaths || [],
  // moduleNameMapper: {
  //   '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  //   // ...(modules.jestAliases || {}),
  // },
  // moduleFileExtensions: [...paths.moduleFileExtensions, 'node'].filter(
  //   ext => !ext.includes('mjs')
  // ),

};

config.rootDir = path.resolve(appSrc, '..');

module.exports = () => {
  console.log('RUN TEST SCRIPT');
  process.env.BABEL_ENV = 'test';
  process.env.NODE_ENV = 'test';

  jest.run(['--config', JSON.stringify(config)]);
};