'use strict'

class RiskDisplayPage {
  // LOCATORS
  get pageContent () { return $('main') }
  get heading () { return $('h1') }
  get addressDetail () { return $("h1[class='govuk-heading-l govuk-!-padding-top-0']") }
  get riversAndSeaBanner () { return $("div[class='govuk-summary-card rivers-sea']") }
  get surfaceWaterBanner () { return $("div[class='govuk-summary-card govuk-!-margin-top-3 surface-water']") }
  get reservoirRiskBanner () { return $('#groundwater') }
  get reservoirNoRiskBanner () { return $('#groundwater') }
  get groundwaterRiskBanner () { return $('#groundwater') }
  get groundwaterNoRiskBanner () { return $('#groundwater') }

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

  async getReservoirRiskTrue () {
    await (await this.reservoirRiskBanner).waitForDisplayed()
    return (await this.reservoirRiskBanner).getText()
  }

  async getReservoirRiskFalse () {
    await (await this.reservoirNoRiskBanner).waitForDisplayed()
    return (await this.reservoirNoRiskBanner).getText()
  }

  async getGroundwaterRiskTrue () {
    await (await this.groundwaterRiskBanner).waitForDisplayed()
    return (await this.groundwaterRiskBanner).getText()
  }

  async getGroundwaterRiskFalse () {
    await (await this.groundwaterNoRiskBanner).waitForDisplayed()
    return (await this.groundwaterNoRiskBanner).getText()
  }
}
module.exports = new RiskDisplayPage()
