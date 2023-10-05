/* global $ */
const Page = require('./page')

class PrivacyNotice extends Page {
  get pageContent () { return $('main') }

  get checkPrivacynoticeContent () {
    this.pageContent.waitForDisplayed({})
    return (this.pageContent).getText()
  }
}
module.exports = new PrivacyNotice()
