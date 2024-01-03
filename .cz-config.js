module.exports = {
  types: [
    { value: "build", name: "build:    Changes that affect the build system" },
    {
      value: "chore",
      name: "chore:    Regular maintenance or housekeeping tasks",
    },
    {
      value: "ci",
      name: "ci:       Changes to your CI configuration or scripts",
    },
    { value: "docs", name: "docs:     Documentation-only changes" },
    { value: "feat", name: "feat:     A new feature" },
    { value: "fix", name: "fix:      A bug fix" },
    {
      value: "perf",
      name: "perf:     A code change that improves performance",
    },
    {
      value: "refactor",
      name: "refactor: A code change that neither fixes a bug nor adds a feature",
    },
    { value: "revert", name: "revert:   Reverts a previous commit" },
    {
      value: "style",
      name: "style:    Code style changes (whitespace, formatting, etc.)",
    },
    {
      value: "test",
      name: "test:     Adding missing tests or correcting existing tests",
    },
  ],
};
