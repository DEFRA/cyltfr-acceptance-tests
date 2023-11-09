'use strict'

class RiskDisplayPage {
  // LOCATORS
  get pageContent () { return $('main') }
  get heading () { return $('h1') }
  get addressDetail () { return $("h1[class='govuk-heading-l govuk-!-padding-top-0']") }
  get riversAndSeaBanner () { return $("h2[class='govuk-summary-card__title rivers-and-sea']") }
  get surfaceWaterBanner () { return $("h2[class='govuk-summary-card__title surface-water']") }
  get reservoirRiskBanner () { return $("dd[class='govuk-summary-list__value reservoirs']") }
  get groundwaterRiskBanner () { return $('#groundwater-section') }

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

  async getReservoirRisk () {
    await (await this.reservoirRiskBanner).waitForDisplayed()
    return (await this.reservoirRiskBanner).getText()
  }

  async getGroundwaterRisk () {
    await (await this.groundwaterRiskBanner).waitForDisplayed()
    return (await this.groundwaterRiskBanner).getText()
  }
}
module.exports = new RiskDisplayPage()
