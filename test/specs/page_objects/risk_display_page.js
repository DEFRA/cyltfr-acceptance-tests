'use strict'

class RiskDisplayPage {
  // LOCATORS
  get pageContent () { return $('main') }
  get heading () { return $('h1') }
  get addressDetail () { return $("h2[class='govuk-heading-m']") }
  get riversAndSeaBanner () { return $('div.rivers-sea > div > p > strong') }
  get surfaceWaterBanner () { return $('div.surface-water > div > p > strong') }
  get reservoirRiskBanner () { return $('div.reservoirs > div > p') }
  get reservoirNoRiskBanner () { return $('p=Flooding from reservoirs is unlikely in this area') }
  get groundwaterRiskBanner () { return $('div.groundwater > div > p') }
  get groundwaterNoRiskBanner () { return $('p=Flooding from groundwater is unlikely in this area ') }

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
