module.exports = {
  root: true,
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["@dinedash/frontend", "plugin:storybook/recommended"],
  overrides: [
    {
      files: ["*.stories.*"],
      rules: {
        "react/jsx-props-no-spreading": "off",
        "react/forbid-dom-props": "off",
      },
    },
  ],
  rules: {
    "no-console": "off", // TODO: remove if logger implemented
    "no-magic-numbers": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-bind": [
      1,
      {
        allowArrowFunctions: true,
        allowFunctions: true,
        allowBind: true,
      },
    ],
    "@typescript-eslint/no-magic-numbers": [
      "error",
      { ignoreEnums: true, ignoreArrayIndexes: true },
    ],
  },
};
