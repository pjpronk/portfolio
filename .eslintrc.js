module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:@intlify/vue-i18n/recommended',
  ],

  plugins: ['prettier'],
  ignorePatterns: ['types/types.ts', 'types/graphql.d.ts'],
  // add your custom rules here
  rules: {
    'eslintvue/multi-word-component-names': 'off',
    'vue/no-bare-strings-in-template': [
      'error',
      {
        allowlist: ['•', '*', '/'],
      },
    ],
    '@intlify/vue-i18n/no-missing-keys': 'error',
    '@intlify/vue-i18n/no-raw-text': [
      'error',
      {
        ignorePattern: '^[/•*]$',
      },
    ],
    'vue/no-v-html': 'off',
  },

  settings: {
    'vue-i18n': {
      localeDir: './lang/*.json',
    },
  },
}
