'use strict'

class RiskDisplayPage {
  // LOCATORS
  get pageContent () { return $('main') }
  get heading () { return $('h1') }
  // adding locator for risk level heading
  get risklevels () { return $("ul[class='govuk-list--bullet']") }
  // adding locator for risk level heading
  get addressDetail () { return $("//*[@id='risk-page']/div[1]/div/div[1]/p[1]") }
  get riversAndSeaBanner () { return $("h2[class='govuk-summary-card__title rivers-and-sea']") }
  get surfaceWaterBanner () { return $("h2[class='govuk-summary-card__title surface-water']") }
  get reservoirRiskBanner () { return $('#main-content > div > div.govuk-width-container > div > div > p:nth-child(12)') }
  get groundwaterRiskBanner () { return $('#main-content > div > div.govuk-width-container > div > div > p:nth-child(6)') }
  // adding locators for each rivers and sea, surface water, reservoir and ground water description
  get riversseaBannerContents () { return $('#main-content > div > div:nth-child(2) > div') }
  get surfaceWaterBannerContents () { return $('#main-content') }
  get reservoirBannerNoRiskContents () { return $('#reservoirs-no-risk-desc') }
  get reservoirBannerRiskContents () { return $('#reservoirs-risk-desc') }
  get groundwaterBannerNoRiskContents () { return $('#groundwater-desc') }
  get surfaceWaterCouncilName () { return $("//*[@id='main-content']/div/div[2]/div/p[11]") }
  get viewMoreAboutRiversandSeaFloodRisk () { return $('#rivers-sea > div.govuk-summary-card__title-wrapper.vlow.card-padding-left > ul > li > a') }
  get viewMoreAboutSurfaceWaterFloodRisk () { return $('#surface-water > div.govuk-summary-card__title-wrapper.vlow.card-padding-left > ul > li > a') }
  get viewMoreAboutGroundWaterAndReservoirs () { return $('#risk-page > div > div > div.govuk-grid-column-two-thirds.summary-grid-width > div:nth-child(3) > div.govuk-summary-card__title-wrapper.vlow.card-padding-left > ul > li > a') }
  //   get viewMapMediumFloodRiskRiverandSea () { return $('#rivers-sea > div.govuk-summary-card__title-wrapper.vlow.card-padding-left > ul > li > a') }
  get viewPausedUpdatesAboutFloodRisk () { return $('#risk-page > div.page-summary > div.govuk-grid-row > div > p:nth-child(4) > a') }
  get viewRiversandSeaMap () { return $('#main-content > div > div:nth-child(2) > div > p:nth-child(5) > a') }
  get clickNextRiversandSeaPage () { return $('#main-content > div > div:nth-child(3) > div > nav > div > a > span.govuk-pagination__link-label') }
  get clickBackToSummary () { return $('.govuk-back-link') }

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
    const match = councilDetails.match(/\bYour lead local flood authority is\s+(\w+(?:\s+\w+)*)/i)
    const councilName = match ? match[1] : null
    const surfacewaterModifiedFile = surfacewaterStaticContentFile.replace(new RegExp(`\\b${'council'}\\b`, 'g'), `${councilName}`)
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

  // Click on View a map of flood risk from rivers and the sea
  async clickMoreAboutRiversandSeaFloodRisk () {
    await (await this.viewMoreAboutRiversandSeaFloodRisk).click()
  }

  // Click on View a map of flood risk from rivers and the sea
  async clickMoreAboutSurfaceWaterFloodRisk () {
    await (await this.viewMoreAboutSurfaceWaterFloodRisk).click()
  }

  async clickMoreAboutGroundWaterandReservoirs () {
    await (await this.viewMoreAboutGroundWaterAndReservoirs).click()
  }

  // Click on updates to national flood and coastal erosion risk information page
  async clickRiversandSeaMap () {
    await (await this.viewRiversandSeaMap).click()
  }

  // Click on updates to national flood and coastal erosion risk information page
  async clickViewPausedUpdatesLink () {
    await (await this.viewPausedUpdatesAboutFloodRisk).click()
  }

  // Click Next on surface water page to navigate to rivers and sea page
  async clickNextRiversandSea () {
    const clickRiverandSea = await this.clickNextRiversandSeaPage
    browser.scroll(clickRiverandSea)
    await (await this.clickNextRiversandSeaPage).click()
  }

  // Click Back to Summary
  async clickOnBackToSummary () {
    await (await this.clickBackToSummary).click()
  }
}

module.exports = new RiskDisplayPage()
