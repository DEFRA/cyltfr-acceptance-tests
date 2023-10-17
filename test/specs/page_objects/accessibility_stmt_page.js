/* global $ */
const Page = require('./page')

class AccessibilityStmt extends Page {
  get pageContent () { return $('main') }

  get checkAccessibilityContent () {
    this.pageContent.waitForDisplayed({})
    return (this.pageContent).getText()
  }
}
module.exports = new AccessibilityStmt()
