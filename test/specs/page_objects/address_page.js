'use strict'

class AddressPage {
  // LOCATORS
  get heading () { return $('//h1') }
  get subHeading1 () { return $("//p[contains(text(),'This service will tell you the flood risk of an ar')]") }
  get subHeading2 () { return $("//p[contains(text(),'This service will tell you the flood risk of an ar')]") }
  get postcodeTitle () { return $("//span[@class='govuk-label']") }
  get postcode () { return $("p[class='govuk-body'] strong") }
  get postcodeChange () { return $("//a[normalize-space()='Change']") }
  get selectaddressTitle () { return $("//label[normalize-space()='Select an address']") }
  get addressCombo () { return $("//select[@id='address']") }
  get addressError () { return $("//p[@id='address-error']") }
  get addressContinueButton () { return $('#address-page form button[type=submit]') }
  get bannerError () { return $("ul[class='govuk-list govuk-error-summary__list']") }
  // getting index path for the address count
  get addressComboText () { return $("//*[@id='address']/option[1]") }

  // METHODS AND FUNCTIONS

  async selectAddress (item) {
    await (await this.addressCombo).waitForDisplayed()
    return (await this.addressCombo).selectByAttribute('value', item)
  }

  async getAddressText (item) {
    await (await this.addressComboText).waitForDisplayed()
    return (await this.addressComboText).getText()
  }

  async clickContinue () {
    await (await this.addressContinueButton).waitForDisplayed({})
    return (await this.addressContinueButton).click()
  }

  async getAdressErrorMessage () {
    await (await this.addressError).waitForDisplayed({})
    return (await this.addressError).getText()
  }

  async getAddressBannerMessage () {
    await (await this.bannerError).waitForDisplayed({})
    return (await this.bannerError).getText()
  }
}

module.exports = new AddressPage()
