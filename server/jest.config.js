module.exports = {
    // Tell Jest to look for test files with the .test.js extension
    testRegex: '.test.js',

    // Configure Jest to use the `supertest` library for testing Express applications
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Map imports starting with @/ to src/ (optional - adjust for your project structure)
    },

    // Set up test environment for Node.js (prevents DOM errors)
    testEnvironment: 'node',
    globalSetup: "./jestGlobalSetup.js",
    globalTeardown: "./jestGlobalTeardown.js"
};