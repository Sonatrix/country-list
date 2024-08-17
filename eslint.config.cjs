const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    resolvePluginsRelativeTo: __dirname,       // optional
    recommendedConfig: js.configs.recommended, // optional unless using "eslint:recommended"
    allConfig: js.configs.all, 
});

module.exports = [
  
  ...compat.config({
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    ignorePatterns: [
      "dist",
      "test/**"
    ],
    extends: [
      "eslint:recommended",
      "plugin:eslint-plugin-prettier/recommended"
    ],
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module"
    },
    rules: {
      'prettier/prettier': ['error', {
        'singleQuote': true,
        'trailingComma': 'es5'
      }],
    },
  })
];