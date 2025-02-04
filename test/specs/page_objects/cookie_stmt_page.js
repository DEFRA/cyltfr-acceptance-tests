'use strict'

class CookieStmt {
  // LOCATORS

  get pageContent () { return $('main') }

  // METHODS/FUNCTIONS
  async checkcookieContent () {
    // await (await this.pageContent).waitForDisplayed({})
    return (await this.pageContent).getText()
  }
}
module.exports = new CookieStmt()
