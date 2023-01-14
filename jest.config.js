module.exports = {
  bail: false,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  verbose: false,
};
