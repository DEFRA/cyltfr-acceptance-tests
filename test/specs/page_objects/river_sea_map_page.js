'use strict'
class RiverSeaMapPage {
  // LOCATORS
  get getAdvancedOptions () {
    return $('#advanced-key-button')
  }

  get getReserviorsExtent () {
    return $('#reservoirs-extent__heading')
  }

  get getShowFloodingCheckBox () {
    return $('#map-key__section > div.govuk-form-group > fieldset > div > div:nth-child(1) > label')
  }

  // METHODS AND FUNCTIONS

  // Click on Show/Hide Advanced options
  async clickAdvancedOptions () {
    await (await this.getAdvancedOptions).waitForDisplayed({})
    await (await this.getAdvancedOptions).click()
  }

  // Click on Reservoirs Extent radio button
  async clickReserviorsExtent () {
    await (await this.getReserviorsExtent).waitForDisplayed({})
    await (await this.getReserviorsExtent).click()
  }

  // Click on Show flooding checkbox
  async clickShowFloodingCheckBox () {
    await (await this.getShowFloodingCheckBox).waitForDisplayed({})
    await (await this.getShowFloodingCheckBox).click()
  }
}
module.exports = new RiverSeaMapPage()
