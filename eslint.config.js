import { ESLint } from "eslint";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";

/** @type {ESLint.FlatConfig} */
export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2022,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/semi-spacing": "error",
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/space-infix-ops": "off",
      "@stylistic/no-unused-vars": "off",
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/comma-spacing": ["error", { "before": false, "after": true }],
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/no-tabs": "error",
      "@stylistic/no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
      "@stylistic/key-spacing": ["error", { "mode": "strict" }],
      "@stylistic/keyword-spacing": ["error", { "after": true }],
      "@stylistic/no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
      ...typescriptPlugin.configs.recommended.rules,
    },
    ignores: ["node_modules", "package-lock.json", "mochawesome-report"],
  },
];