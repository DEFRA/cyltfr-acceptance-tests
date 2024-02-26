'use strict'

class RiskDisplayPage {
  // LOCATORS
  get pageContent () { return $('main') }
  get heading () { return $('h1') }
  // adding locator for risk level heading
  get risklevels () { return $("ul[class='govuk-list--bullet']") }
  // adding locator for risk level heading
  get addressDetail () { return $("h1[class='govuk-heading-l govuk-!-padding-top-0']") }
  get riversAndSeaBanner () { return $("h2[class='govuk-summary-card__title rivers-and-sea']") }
  get surfaceWaterBanner () { return $("h2[class='govuk-summary-card__title surface-water']") }
  get reservoirRiskBanner () { return $("dd[class='govuk-summary-list__value reservoirs']") }
  get groundwaterRiskBanner () { return $('#groundwater-section') }
  // adding locators for each rivers and sea, surface water, reservoir and ground water description
  get riversseaBannerContents () { return $('.govuk-summary-card__content.rivers-and-sea') }
  get surfaceWaterBannerContents () { return $('.govuk-summary-card__content.surface-water') }
  get reservoirBannerNoRiskContents () { return $('#reservoirs-no-risk-desc') }
  get reservoirBannerRiskContents () { return $('#reservoirs-risk-desc') }
  get groundwaterBannerNoRiskContents () { return $('#groundwater-desc') }
  get surfaceWaterCouncilName () { return $('#llfa-flood-authority') }

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

  // Adding method to get Surface Water Contents details

  async getSurfaceWaterContents () {
    await (await this.surfaceWaterBannerContents).waitForDisplayed()
    return (await this.surfaceWaterBannerContents).getText()
  }
  // Adding method too get rivers and sea Contents details

  async getriversAndSeaContents () {
    await (await this.riversseaBannerContents).waitForDisplayed()
    return (await this.riversseaBannerContents).getText()
  }

  // Adding method to get risk level
  async getRisklevels () {
    await (await this.risklevels).waitForDisplayed()
    return (await this.risklevels).getText()
  }

  // Adding method to get council name
  async getsurfaceWaterCouncilDetails () {
    await (await this.surfaceWaterCouncilName).waitForDisplayed()
    return (await this.surfaceWaterCouncilName).getText()
  }

  async getCouncilDetails (surfacewaterStaticContentFile, councilDetails) {
    // Getting the council details
    const match = councilDetails.match(/\bis\s+(\w+(?:\s+\w+)*)\s+council\b/i)
    const councilName = match ? match[1] : null
    const surfacewaterModifiedFile = surfacewaterStaticContentFile.replace(new RegExp(`\\b${'council'}\\b`, 'g'), `${councilName} ${'council'}`)
    return { councilName, surfacewaterModifiedFile }
  }

  // Amending the Risk level data as per risk level
  async getRiskLevelsData (riskType, textFile) {
    // adding the risk type in the file
    const riskLevelType = /\bis\b/
    const modifiedFile = textFile.replace(riskLevelType, `$& ${riskType}`)
    // console.log('*********ADDING RISK TYPE FROM FUNCTION*******', modifiedFile)
    let riskText = ''
    if (riskType === 'High risk') {
      riskText = 'of greater than 3.3% each year.'
    } else if (riskType === 'Medium risk') {
      riskText = 'of between 1% and 3.3% each year.'
    } else if (riskType === 'Low risk') {
      riskText = 'of between 0.1% and 1% each year.'
    } else if (riskType === 'Very low risk') {
      riskText = 'of less than 0.1% each year.'
    }
    // adding the risk text in the file
    const addRiskText = /\bflooding\b/
    const newRiskText = modifiedFile.replace(addRiskText, `$& ${riskText}`)
    return { newRiskText }
  }
}

module.exports = new RiskDisplayPage()
