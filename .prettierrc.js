export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./resources/css/app.css",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        arrowParens: "always",
        bracketSameLine: false,
        bracketSpacing: true,
        endOfLine: "lf",
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "es5",
        useTabs: false,
      }
    }
  ]
}