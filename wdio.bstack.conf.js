// this is a placeholder file for passing tests over to browserstack


'use strict'

const browserstack = require('browserstack-local')
const bsApi = require('./services/bstack/bstack-api')
const compatibility = require('./browsers')
const moment = require('moment-timezone')
const timestamp = moment.tz('Europe/London').format('D/M/YY hh:mm:ss')
global.ltfUrl = process.env.FLOOD_RISK_URL

exports.config = {

  // placeholder for browserstack tests - to run this a file will need to be created and the filepath likely updated
  specs: [
    './test/browser-comp-test.js'
  ],

  maxInstances: 2,

  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',

  capabilities: compatibility.map(e => {
    e.project = 'Flood Service'
    e.build = 'Flood Service'
    e['browserstack.local'] = true
    e['browserstack.debug'] = true
    e['browserstack.networkLogs'] = true
    e['browserstack.acceptSslCerts'] = true
    e['browserstack.console'] = 'errors'
    e['browserstack.use_w3c'] = true
    e['browserstack.selenium_version'] = '3.141.59'
    return e
  }),

  // Code to start browserstack local before start of test
  onPrepare: function (config, capabilities) {
    console.log('Connecting local')
    return new Promise(function (resolve, reject) {
      exports.bs_local = new browserstack.Local()
      const bsLocalArgs = {
        key: exports.config.key,
        verbose: 'true',
        force: 'true',
        onlyAutomate: 'true',
        forceLocal: 'true'
      }
      exports.bs_local.start(bsLocalArgs, function (error) {
        if (error) return reject(error)
        console.log('Connected. Now testing...')
        resolve()
      })
    })
  },

  // Code to stop browserstack local after end of test
  onComplete: (capabilities, specs) => {
    exports.bs_local.stop()
    console.log('Testing complete, binary closed')
  },

  logLevel: 'warn',
  bail: 0,
  baseUrl: process.env.FLOOD_APP_SITE_URL,
  waitforTimeout: 60000,
  connectionRetryTimeout: 60000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters:
    [
      'spec', 'dot'
    ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 240000
  },

  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    const sessionId = browser.sessionId
    await bsApi.setSessionName(sessionId, chooseSessionName(test))
    if (!passed) {
      browser.takeScreenshot()
    } // only update session status for failures
    if (!passed) {
      await bsApi.setSessionFailed(sessionId, error, result)
    }
  },

  after: async function (config, capabilities, specs) {
    const sessionId = browser.sessionId
    const status = await bsApi.getSessionStatus(sessionId)
    // mark session as passed if it has not failed or timed out
    if (status !== 'failed' && status !== 'timeout') {
      await bsApi.setSessionPassed(sessionId)
    }
  },

  before: function (test, context) {
    const chai = require('chai')
    const chaiWebdriver = require('chai-webdriverio').default
    chai.use(chaiWebdriver(browser))
    global.assert = chai.assert
    global.should = chai.should
    global.expect = chai.expect

    // cookies setup and teardown helper
    require('./services/utilities/testHelper.js')
  }
}

// name after describe (test.parent) or test file name from path (test.file)
function chooseSessionName (test) {
  if (test.parent) {
    const testNameWithTime = test.parent + `@${timestamp}`
    return testNameWithTime
  } else {
    const parts = test.file.split('/')
    return parts[parts.length - 1]
  }
}

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (const i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i]
})
