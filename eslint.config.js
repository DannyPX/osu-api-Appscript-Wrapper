import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import markdown from "eslint-plugin-markdown";

export default [
  ...pluginVue.configs['flat/recommended'],
  ...markdown.configs.recommended,
  {
    // 1. Add the plugin
    plugins: {
        markdown
    }
  },
  {
    files: ["**/*.md"],
    processor: "markdown/markdown"
  },
  {
    files: ["**/*.md/*.js"],
    rules: {
    }
  },
  {
    ignores: ['docs/.vitepress/cache/'],
  },
  {
    files: ['docs/**/*.{js,vue,ts}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
      },
    },
  },
];
