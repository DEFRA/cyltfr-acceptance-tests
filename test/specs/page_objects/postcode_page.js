'use strict'
class PostcodePage {
  // LOCATORS
  get title () {
    return $('h1')
  }

  get subHeading () {
    return $(
      "//p[contains(text(),'This service will tell you the flood risk of an ar')]"
    )
  }

  get postcodeHeading () {
    return $("//label[normalize-space()='Enter a postcode']")
  }

  get postcodeHint () {
    return $('#postcode-hint')
  }

  get postcodeTextbox () {
    return $('#postcode')
  }

  get postcodeError () {
    return $('#postcode-error')
  }

  get contBtn () {
    return $('#post-code-button')
  }

  get viewMapAreasFloodingLink () {
    return $("//a[@href='/map']")
  }

  get royalMailPostcodeFinderLink () {
    return $("//a[@href='http://www.royalmail.com/find-a-postcode']")
  }

  get bannerError () {
    return $("[class='govuk-list govuk-error-summary__list']")
  }

  get acceptCookieBtn () {
    return $("[class='govuk-button js-cookies-button-accept']")
  }

  get hideCookieBtn () { return $('body > div.js-cookies-container > form > div > div.govuk-cookie-banner__message.js-cookies-accepted.govuk-width-container > div.govuk-button-group > a') }

  // METHODS FUNCTIONS ACTIONS

  async enterPostcode (postcode) {
    await (await this.postcodeTextbox).waitForDisplayed({})
    return (await this.postcodeTextbox).setValue(postcode)
  }

  async clickContinue () {
    await (await this.contBtn).waitForDisplayed({})
    return (await this.contBtn).click()
  }

  async getPostcodeErrorMessage () {
    await (await this.postcodeError).waitForDisplayed({})
    return (await this.postcodeError).getText()
  }

  async getPostcodeBannerMessage () {
    await (await this.bannerError).waitForDisplayed({})
    return (await this.bannerError).getText()
  }

  async acceptCookies () {
    try {
      await (await this.acceptCookieBtn).click()
      await (await this.hideCookieBtn).click()
    } catch (err) {
      console.log('Element not present')
    }
  }
}
module.exports = new PostcodePage()
