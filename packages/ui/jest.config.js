const isCI = !!process.env.CI;

const coverageReporters = isCI ? ["lcov", "json"] : ["html", "text"];

const jestSonarReporter = [
  "jest-sonar",
  {
    relativeRootDir: "../../",
  },
];

const reporters = isCI
  ? [jestSonarReporter, "jest-standard-reporter"]
  : undefined;

module.exports = {
  transform: {
    "^.+\\.tsx?$": "@swc/jest",
  },
  testEnvironment: "jsdom",
  collectCoverage: false,
  coverageReporters,
  reporters,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  resetMocks: true,
  bail: false,
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "snapshot-diff/extend-expect",
    "jest-styled-components",
  ],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
  displayName: {
    name: "Checkout Components",
    color: "orange",
  },
};
