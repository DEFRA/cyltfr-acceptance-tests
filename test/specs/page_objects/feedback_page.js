'use strict'

class FeedbackPage {
  // LOCATORS

  get backLink () { return $('.govuk-back-link') }

  async clickBackLink () {
    // await this.backLink.waitForDisplayed({})
    return (await this.backLink).click()
  }
}
module.exports = new FeedbackPage()
