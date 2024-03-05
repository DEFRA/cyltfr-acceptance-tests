'use strict'

class FloodRiskData {
  // LOCATORS

  get pageTitle () { return $('.govuk-heading-xl') }
  get pageContent () { return $('main') }

  // METHODS/FUNCTIONS TO PERFORM ACTIONS ON PAGE
  async getPageTitle () {
    await (await this.pageTitle).waitForDisplayed({})
    return (await this.pageTitle).getText()
  }

  async checkFloodRiskContent () {
    await this.pageContent.waitForDisplayed({})
    return (await this.pageContent).getText()
  }
}
module.exports = new FloodRiskData()
