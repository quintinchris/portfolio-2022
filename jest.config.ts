module.exports = {
	moduleFileExtensions: [
   	"ts",
    "tsx",
   	"json",
   	"node"
 	],
 	testMatch: [
   	"**/?(*.)+(test).ts?(x)"
 	],
 	testPathIgnorePatterns: [
   	"/node_modules/"
 	],
	rootDir: __dirname,
	roots: [
   	"<rootDir>"
 	],
 	collectCoverageFrom: {
        "src/**/*.{ts,tsx}": true,
     },
	coveragePathIgnorePatterns: [
   	"/node_modules/"
 	], 
    // TODO: add coverage
    collectCoverage: false,
	coverageThreshold: null,
	moduleDirectories: [
   	"node_modules"
 	],
	moduleNameMapper: {
      "^@assets/(.*)$": '<rootDir>/src/assets/$1',
      "^@components/(.*)$": '<rootDir>/src/components/$1',
      "^@pages/(.*)$": '<rootDir>/src/pages/$1',
      "^@services/(.*)$": '<rootDir>/src/services/$1',
      "^@styles/(.*)$": '<rootDir>/src/styles/$1',
      "^@utils/(.*)$": '<rootDir>/src/utils/$1',
    }
  };