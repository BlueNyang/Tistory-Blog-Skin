import eslintPluginAstro from 'eslint-plugin-astro';
import js from "@eslint/js"
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierConfig from './prettier.config.js';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  ...eslintPluginAstro.configs.recommended,
  {
    extends: [
      js.config.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
    ],
    files: ['**/*.astro', '**/*.js', '**/*.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    }
  },
  prettierConfig
)