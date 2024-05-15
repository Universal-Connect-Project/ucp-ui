module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "prettier",
  ],
  ignorePatterns: [
    ".eslintrc.cjs",
    "cypress.config.ts",
    "jest.config.cjs",
    "jestSetup.js",
  ],
  overrides: [
    {
      files: ["tests/**/*"],
      plugins: ["jest"],
      env: {
        "jest/globals": true,
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "cypress"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
  },
};
