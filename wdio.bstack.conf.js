'use strict'

const allureReporter = require('@wdio/allure-reporter').default
const fileUtils = require('./test/specs/utilities/deleteFile')

const allure = require('allure-commandline')

const oneMinute = 60 * 1000

global.baseUrl = process.env.CYLTFR_APP_URL

global.capchaBypass = '/postcode?captchabypass=' + process.env.TESTING_CAPCHA_BYPASS

exports.config = {
  runner: 'local',
  specs: ['./test/specs/specs/static_content_tests.js'],
  exclude: [],
  maxInstances: 1,

  // Browserstack creds
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_KEY,

  capabilities: [
    {
      browserName: 'Firefox',
      'bstack:options': {
        os: 'Windows',
        osVersion: '11',
        browserVersion: 'latest',
        projectName: 'CYLTFR Project',
        buildName: 'CYLTFR build using Windows Firefox'
      }
    },
    {
      browserName: 'Chrome',
      'bstack:options': {
        os: 'Windows',
        osVersion: '11',
        browserVersion: 'latest',
        projectName: 'CYLTFR Project',
        buildName: 'CYLTFR build using Windows Chrome'
      }
    },
    {
      browserName: 'Edge',
      'bstack:options': {
        os: 'Windows',
        osVersion: '11',
        browserVersion: 'latest',
        projectName: 'CYLTFR Project',
        buildName: 'CYLTFR build using Windows Edge'
      }
    },
    {
      browserName: 'Edge',
      'bstack:options': {
        os: 'OS X',
        osVersion: 'Sonoma',
        browserVersion: 'latest',
        projectName: 'CYLTFR Project',
        buildName: 'CYLTFR build using OS X Edge'
      }
    },
    {
      browserName: 'Safari',
      'bstack:options': {
        os: 'OS X',
        osVersion: 'Sonoma',
        browserVersion: '17.3',
        projectName: 'CYLTFR Project',
        buildName: 'CYLTFR build using OS X Safari'
      }
    },
    {
      browserName: 'Firefox',
      'bstack:options': {
        os: 'OS X',
        osVersion: 'Sonoma',
        browserVersion: 'latest',
        projectName: 'CYLTFR Project',
        buildName: 'CYLTFR build using OS X Firefox'
      }
    }
  ],

  services: [
    [
      'browserstack',
      {
        testObservability: true,
        testObservabilityOptions: {
          user: process.env.BROWSERSTACK_USERNAME,
          key: process.env.BROWSERSTACK_KEY,
          projectName: 'CYLTFR Browserstack Tests',
          buildName: 'CYLTFR Cross Browser Build'
        },
        acceptInsecureCerts: true,
        forceLocal: true,
        browserstackLocal: true,
        opts: {}
      }
    ]
  ],
  bail: 0,
  baseUrl: global.baseUrl,
  waitforTimeout: 120000,
  waitforInterval: 500,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 2,
  framework: 'mocha',
  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'allure-results'
      }
    ]
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  /**
   * Gets executed once before all workers get launched.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: async (config, capabilities) => {
    fileUtils.deleteDirectory('allure-results')
    fileUtils.deleteDirectory('allure-report')
    console.log('***** You\'re now running this test pack against ', global.baseUrl, ' if this is incorrect you may want to abort the test run *****')
    console.log('***** THE CAPCHA BYPASS YOU ARE USING IS ' + global.capchaBypass)
  },
  /**
   * Gets executed before a worker process is spawned and can be used to initialise specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {string} cid      capability id (e.g 0-0)
   * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {object} specs    specs to be run in the worker process
   * @param  {object} args     object that will be merged with the main configuration once worker is initialized
   * @param  {object} execArgv list of string arguments passed to the worker process
   */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {},
  /**
   * Gets executed just after a worker process has exited.
   * @param  {string} cid      capability id (e.g 0-0)
   * @param  {number} exitCode 0 - success, 1 - fail
   * @param  {object} specs    specs to be run in the worker process
   * @param  {number} retries  number of retries used
   */
  // onWorkerEnd: function (cid, exitCode, specs, retries) {}
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   * @param {string} cid worker id (e.g. 0-0)
   */
  // beforeSession: function (config, capabilities, specs, cid) {}
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {object}         browser      instance of created browser/device session
   */
  before: async (capabilities, specs) => {
    const chai = require('chai')
    global.assert = chai.assert
    global.should = chai.should
    global.expect = chai.expect
    global.allure = allureReporter
  },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {string} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {},
  /**
   * Hook that gets executed before the suite starts
   * @param {object} suite suite details
   */
  // beforeSuite: function (suite) {},
  /**
   * Function to be executed before a test (in Mocha/Jasmine) starts.
   */
  // beforeTest: function (test, context) {}
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   */
  // beforeHook: function (test, context) {},
  /**
   * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
   * afterEach in Mocha)
   */
  // afterHook: function (
  //   test,
  //   context,
  //   { error, result, duration, passed, retries }
  // ) {},
  /**
   * Function to be executed after a test (in Mocha/Jasmine only)
   * @param {object}  test             test object
   * @param {object}  context          scope object the test was executed with
   * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
   * @param {*}       result.result    return object of test function
   * @param {number}  result.duration  duration of test
   * @param {boolean} result.passed    true if test has passed, otherwise false
   * @param {object}  result.retries   information about spec related retries, e.g. `{ attempts: 0, limit: 0 }`
   */
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    await browser.takeScreenshot()
  },

  /**
   * Hook that gets executed after the suite has ended
   * @param {object} suite suite details
   */
  // afterSuite: function (suite) {},
  /**
   * Runs after a WebdriverIO command gets executed
   * @param {string} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {number} result 0 - command success, 1 - command error
   * @param {object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {},
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {},
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {},
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {object} exitCode 0 - success, 1 - fail
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  onComplete: async function (exitCode, config, capabilities, results) {
    const reportError = new Error('Could not generate Allure report')
    const generation = allure(['generate', 'allure-results', '--clean'])

    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), oneMinute)

      generation.on('exit', function (exitCode) {
        clear(generation)

        if (exitCode !== 0) {
          return reject(reportError)
        }

        resolve()
      })
    })
  }
  /**
   * Gets executed when a refresh happens.
   * @param {string} oldSessionId session ID of the old session
   * @param {string} newSessionId session ID of the new session
   */
  // onReload: function (oldSessionId, newSessionId) {}
}
