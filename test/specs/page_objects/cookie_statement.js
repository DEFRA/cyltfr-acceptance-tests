/* global $ */
const Page = require('./page')

class CookieStatement extends Page {
  get pgTitle () { return $('.govuk-heading-l') }
  get pgContent () { return $('main') }

  get pageTitle () {
    this.pgTitle.waitForDisplayed({})
    return (this.pgTitle).getText()
  }

  get checkcookieContent () {
    this.pgContent.waitForDisplayed({})
    return (this.pgContent).getText()
  }
}
module.exports = new CookieStatement()
