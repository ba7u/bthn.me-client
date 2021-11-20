module.exports = require('./jest-config-factory')({
  testRegex: '(/__tests__/.*|(\\.|/))(test|spec)\\.(ts|tsx)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
});
