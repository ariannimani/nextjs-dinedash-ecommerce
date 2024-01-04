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
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  collectCoverage: true,
  coverageReporters,
  reporters,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  resetMocks: true,
  bail: false,
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  displayName: {
    name: "Web",
    color: "green",
  },
};
