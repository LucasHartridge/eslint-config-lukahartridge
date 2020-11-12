const { OFF, ERROR, WARN } = require('../constants');

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  env: {
    browser: true,
  },
  rules: {
    'arrow-parens': [ERROR, 'as-needed'],

    /*
      Allow placing object props in both single line and multiple lines
      Allow creating class methods that don't use `this`
    */
    'class-methods-use-this': OFF,

    /* Skip checking empty lines after single-line class members */
    'lines-between-class-members': [
      ERROR, 'always', {
        exceptAfterSingleLine: true,
      },
    ],

    /* Max characters allowed in a single line of code */
    'max-len': [ERROR, { code: 120 }],

    /* Allow debugger during development */
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'no-mixed-operators': OFF,

    'no-param-reassign': OFF,

    'no-useless-return': OFF,

    'object-curly-newline': [ERROR, {
      minProperties: 5,
      consistent: true,
    }],

    'prefer-destructuring': OFF,

    'no-warning-comments': [WARN, {
      terms: ['debug', 'deleteme', 'fixme', 'removeme', 'temp', 'uncommentme', 'xxx'],
    }],

    'comma-dangle': OFF,

    semi: OFF,

    'space-before-function-paren': OFF,
  },
};
