export default {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  notifyMode: "failure-change",
  testEnvironment: "node",
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
};
