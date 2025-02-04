'use strict'

class AccessibilityStmt {
  // LOCATORS

  get pageTitle () { return $('.govuk-heading-xl') }
  get pageContent () { return $('#home-page') }

  // METHODS/FUNCTIONS TO PERFORM ACTIONS ON PAGE
  async getPageTitle () {
    // await (await this.pageTitle).waitForDisplayed({})
    return (await this.pageTitle).getText()
  }

  async checkAccessibilityContent () {
    // await this.pageContent.waitForDisplayed({})
    return (await this.pageContent).getText()
  }
}
module.exports = new AccessibilityStmt()
