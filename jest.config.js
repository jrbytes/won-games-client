const nextJest = require('next/jest')
const createJestConfig = nextJest({
  moduleDirectories: ['src']
})
const customJestConfig = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/*.ts(x)?',
    'src/templates/*.ts(x)?',
    'src/utils/tests/*.tsx',
    'src/utils/*.ts',
    '!src/**/stories.tsx',
    '!src/**/mock.ts',
    '!src/utils/apollo.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest/'],
}
module.exports = createJestConfig(customJestConfig)
