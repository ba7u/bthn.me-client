// setup file for jest
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env` });

module.exports = ({ testRegex, moduleFileExtensions }) => ({
  coveragePathIgnorePatterns: [
    'src/components/icon/*',
    'mocks/*',
    'stubs/*',
    '.enum.ts',
    '.interface.ts',
    '.type.ts',
    '.stories.ts',
  ],
  moduleNameMapper: {
    ...require('jest-module-name-mapper').default(),
    // Mocking static assets
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'mocks/fileMock.js',
    '\\.css$': 'identity-obj-proxy',
  },
  modulePaths: ['<rootDir>'],
  moduleFileExtensions,
  transform: {
    '^.+\\.(ts|tsx)$': [
      '@swc/jest',
      {
        sourceMaps: true,
        jsc: {
          target: 'es2021',
        },
      },
    ],
  },

  testEnvironment: 'node',
  testRegex,
  setupFilesAfterEnv: ['<rootDir>/mocks/global-react.ts', '<rootDir>/mocks/setup.ts'],
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\](?!lodash-es/).+\\.js$'],
});
