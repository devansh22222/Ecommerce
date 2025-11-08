import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true }, // ✅ Enables JSX parsing
        sourceType: "module"
      }
    },
    plugins: { react: pluginReact },
    rules: {
      "react/react-in-jsx-scope": "off", // ✅ No need to import React
      "react/prop-types": "off",         // ✅ Ignore prop-types
      "no-unused-vars": "off"            // ✅ Disable false unused-var warnings
    },
    settings: {
      react: { version: "detect" } // ✅ Auto-detect React version
    }
  }
]);
