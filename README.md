# lh-eslint-config

Eslint configration

This package provides a shared extensible [ESLint](https://eslint.org/) config only for **Javascript** at the moment

[Shareable configs](https://eslint.org/docs/developer-guide/shareable-configs) are designed to work with the `extends` feature of `.eslintrc` files.

[Airbnb JavaScript style guide](http://airbnb.io/javascript/) is used as the basis for our ESLint configuration with some additions/changes. See [JavaScript Style Guide](https://cloudbeds.atlassian.net/wiki/spaces/ES/pages/531398675/JavaScript+Style+Guide) Confluence page.

## Installation

Install ESLint and all dependencies:

```
npm install eslint-config-lukahartridge --save-dev
```

## Getting started

Add the following to your `package.json`

```json
{
  "scripts": {
    "lint": "eslint src/**/*.js",
    "lint:show-unused-directives": "npm run lint -- --report-unused-disable-directives"
  },
  "eslintConfig": {
    "extends": "eslint-config-lukahartridge"
  }
}
```

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)
