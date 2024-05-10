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

  get getZoomOut () {
    return $('#map > div > div.ol-overlaycontainer-stopevent > div.ol-zoom.ol-unselectable.ol-control > button.ol-zoom-out')
  }

  get getZoomIn () {
    return $('#map > div > div.ol-overlaycontainer-stopevent > div.ol-zoom.ol-unselectable.ol-control > button.ol-zoom-in')
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

  // verify zoom in and zoom out buttons are enabled
  async verifyZoomInZoomOutButtonsEnabled () {
    const zoomInEnabled = await this.getZoomIn.isEnabled({})
    expect(zoomInEnabled).equals(true)
    const zoomOutEnabled = await this.getZoomOut.isEnabled({})
    expect(zoomOutEnabled).equals(true)
  }
}
module.exports = new RiverSeaMapPage()
