'use strict'

class RiskDisplayPage {
  // LOCATORS
  get pageContent () { return $('main') }
  get heading () { return $('h1') }
  get addressDetail () { return $("h2[class='govuk-heading-m']") }
  get riversAndSeaBanner () { return $('div.rivers-sea > div > p > strong') }
  get surfaceWaterBanner () { return $('div.surface-water > div > p > strong') }

  // METHODS AND FUNCTIONS

  async confirmAddressDetail () {
    await (await this.addressDetail).waitForDisplayed()
    return (await this.addressDetail).getText()
  }

  async getRiversAndSeaRisk () {
    await (await this.riversAndSeaBanner).waitForDisplayed()
    return (await this.riversAndSeaBanner).getText()
  }

  async getSurfaceWaterRisk () {
    await (await this.surfaceWaterBanner).waitForDisplayed()
    return (await this.surfaceWaterBanner).getText()
  }
}
module.exports = new RiskDisplayPage()
