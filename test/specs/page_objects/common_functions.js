'use strict'

class CommonFunctions {
  async getTitle (expected) {
    expect(await browser.getTitle()).to.include(expected)
  }

  async waitTitle (expected, timeout = 15000) {
    await this.waitUntilStable()
    await browser.waitUntil(async () => { return (await browser.getTitle()).includes(expected) }
      , {
        timeout,
        timeoutMsg: `Expected title must be ${expected}`
      })
  }

  async waitUntilStable () {
    await browser.waitUntil(
      async () => await browser.execute(() => document.readyState === 'complete'),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: 'Message on failure'
      }
    )
  }
}
module.exports = new CommonFunctions()
