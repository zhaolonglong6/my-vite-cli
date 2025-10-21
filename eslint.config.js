import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "vue-eslint-parser";
import globals from "globals";
import eslintVue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier/recommended";

export default [
  // ✅ 基础 JS 推荐规则 (相当于 "eslint:recommended")
  js.configs.recommended,

  // ✅ TypeScript 推荐规则
  ...tseslint.configs.recommended,

  // ✅ Vue 3 推荐规则
  ...eslintVue.configs["flat/recommended"],

  {
    files: ["**/*.{js,jsx,ts,tsx,vue,cjs,mjs}"],
    languageOptions: {
      parser: pluginVue,
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      sourceType: "module",
      ecmaVersion: "latest",
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      "vue/multi-word-component-names": "off", // Vue 组件的名字必须是多个单词
      "vue/html-indent": "off", // Vue 模板缩进
      "vue/max-attributes-per-line": "off", // 限制标签属性在一行的数量
      "vue/html-closing-bracket-newline": "off", // 规定标签的闭合括号 > 前是否要换行
      "vue/html-self-closing": "off", // 规定哪些标签必须自闭合
      "vue/singleline-html-element-content-newline": "off", // 关闭必须换行
    },
  },

  {
    ignores: [
      "**/*.cjs",
      "node_modules",
      "dist",
      ".zip",
      ".gitignore",
      "package.json",
      "package-lock.json",
      ".npmrc",
      "*.d.ts",
      "src/assets/**",
    ],
  },
  // 关闭eslint和Prettier的规则冲突，以prettier为准
  prettier,
];
