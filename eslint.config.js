'use strict'

module.exports = require('neostandard')({
  env: ['jest'],
  ignores: ['server/public/build/js/**', 'server/public/static/js/vendor/**'],
  globals: [
    'describe',
    'context',
    'before',
    'beforeEach',
    'after',
    'afterEach',
    'it',
    'expect',
    'browser',
    '$',
    'baseUrl'
  ]

})
