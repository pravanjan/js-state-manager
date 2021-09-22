module.exports = {
  "collectCoverage": true,
  "coverageReporters": ["json", "html"],
    "roots": [
      "test"
    ],
    "testMatch": [
      "**/*.test.ts",
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
  }