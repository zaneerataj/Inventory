module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.css$': 'identity-obj-proxy', // Mock CSS imports for Jest
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$', // Match test files
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // File extensions to test
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Setup file for Jest DOM
};
