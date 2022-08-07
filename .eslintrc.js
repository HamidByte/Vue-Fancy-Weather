module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    // 'plugin:cypress/recommended',
  ],
  parserOptions: {
    // parser: '@babel/eslint-parser',
    parser: 'babel-eslint',
  },

  // ignorePatterns: ['src/@core/*'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-var': 'error',
    'brace-style': 'error',
    'no-param-reassign': [2, { props: false }],
    semi: ['error', 'never'],
    'max-len': 'off',
    'linebreak-style': 'off',
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true, ignoreImports: true }],
    'arrow-parens': ['error', 'as-needed'],
    'vue/multiline-html-element-content-newline': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    // "func-names": "off",
    // "no-process-exit": "off",
    // "object-shorthand": "off",
    // "class-methods-use-this": "off",
    'vuejs-accessibility/click-events-have-key-events': 'off'
  },
}
