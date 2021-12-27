module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier-vue/recommended",
  ],
  rules: {
    // Define custom rules.
    "prettier-vue/prettier": ["error", { endOfLine: "auto" }],
  },
  settings: {
    "prettier-vue": {
      // @NOTE : Ignore <template> and <script>
      SFCBlocks: {
        template: false,
        script: false,
        style: true,
      },
    },
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
  },
};
