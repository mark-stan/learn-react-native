// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const pluginReactNative = require('eslint-plugin-react-native');

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      'react-native': pluginReactNative,
    },
    rules: {
      ...pluginReactNative.configs.recommended.rules,
    },
  },
  {
    ignores: ['dist/*'],
  },
]);
