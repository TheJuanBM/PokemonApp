module.exports = {
  collectCoverage: true,
  testEnvironment: 'jsdom',
  preset: '@testing-library/react-native',
  coverageReporters: ['html'],
  moduleNameMapper: { '\\.svg': '<rootDir>/testing/svgMock.js' },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)']
}
