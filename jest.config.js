module.exports = {
  collectCoverage: true,
  coverageReporters: ['html'],
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
  moduleNameMapper: { '\\.svg': '<rootDir>/testing/svgMock.js' }
}
