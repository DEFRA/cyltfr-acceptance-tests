'use strict'

class GroundWaterDisplayPage {
  // LOCATORS
  //  get reservoirRiskBanner () { return $('h2=Reservoirs').$(function () { return this.nextSibling.nextSibling }) }
  get groundwaterRiskBanner () { return $('h2=Groundwater').$(function () { return this.nextSibling.nextSibling }) }
  get reservoirRiskBanner () { return $('h2=Reservoirs').$(function () { return this.nextSibling.nextSibling }) }

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
