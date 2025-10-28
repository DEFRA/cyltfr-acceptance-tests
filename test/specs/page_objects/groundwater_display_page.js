'use strict'

class GroundWaterDisplayPage {
  // LOCATORS
  //  get reservoirRiskBanner () { return $('h2=Reservoirs').$(function () { return this.nextSibling.nextSibling }) }
  get groundwaterRiskBanner () { return $('h1=Groundwater: understand your flood risk').$(function () { return this.nextElementSibling.nextElementSibling.nextElementSibling }) }
  get reservoirRiskBanner () { return $('h1=Reservoirs: understand your flood risk').$(function () { return this.nextElementSibling.nextElementSibling.nextElementSibling }) }

  async getReservoirRisk () {
    // await (await this.reservoirRiskBanner).waitForDisplayed()
    return (await this.reservoirRiskBanner).getText()
  }

  async getGroundwaterRisk () {
    // await (await this.groundwaterRiskBanner).waitForDisplayed()
    return (await this.groundwaterRiskBanner).getText()
  }
}
module.exports = new GroundWaterDisplayPage()
