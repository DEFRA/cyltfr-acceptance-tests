'use strict'

class CommonFunctions {
  async getTitle (expected) {
    // browser.waitUntil(
    //   () => browser.execute(() => document.readyState === 'complete'),
    //   { timeout: 60 * 1000 }
    // )
    expect(await browser.getTitle()).to.include(expected)
  }
}
module.exports = new CommonFunctions()
