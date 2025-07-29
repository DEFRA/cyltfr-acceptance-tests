'use strict'

class PostcodeErrorPage {
  // LOCATORS
  get title () { return $('h1') }
  get heading () { return $("//h1[normalize-space()='This service is for postcodes in England only']") }
  get subHeading () { return $("//p[normalize-space()='The postcode you entered is in Northern Ireland.']") }
  get northernIrelandlink () { return $(".govuk-link[href='https://www.nidirect.gov.uk/articles/check-the-risk-of-flooding-in-your-area']") }
  get waleslink () { return $(".govuk-link[href='https://naturalresources.wales/evidence-and-data/maps/long-term-flood-risk/?lang=en']") }
  get scotlandlink () { return $(".govuk-link[href='https://www.sepa.org.uk/environment/water/flooding/flood-maps/']") }

  // METHODS FUNCTIONS ACTIONS

  async getPageHeading () {
    // await (await this.title).waitForDisplayed({})
    return (await this.title).getText()
  }
}
module.exports = new PostcodeErrorPage()
