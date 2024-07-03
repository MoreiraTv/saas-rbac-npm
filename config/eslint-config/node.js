/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@rocketseat/eslint-config/node"],
  plugins: ["Simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
  },
};
