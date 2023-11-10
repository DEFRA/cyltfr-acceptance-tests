'use strict'

class PrivacyNotice {
  // LOCATORS
  get pageContent () { return $('main') }

  // METHODS AND FUNCTIONS
  async checkPrivacyNoticeContent () {
    await (await this.pageContent).waitForDisplayed({})
    return (await this.pageContent).getText()
  }
}
module.exports = new PrivacyNotice()
