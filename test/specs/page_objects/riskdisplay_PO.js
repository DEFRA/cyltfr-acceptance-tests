/* global $ $$ */
const Page = require('./page')

class RiskDisplayPO extends Page {
  get pageContent () {
    return $('main')
  }

  get heading () {
    return $('h1')
  }

  get subHeading () {
    return $("h2[class='govuk-heading-m']")
  }

  get risktypes () {
    return $$('h3')
  }

  get riskLevel () {
    // return $$('h3')
    return $$('//p[@class="govuk-!-margin-top-0 risk"]')
  }

  // Risk Heading and text
  get surfacewaterRiskContent () {
    return $('.surface-water')
  }

  get SummaryLinkContent () {
    return $('.govuk-details__text[css]')
  }

  get riversandseaRiskContent () {
    return $('.rivers-sea')
  }

  get reservoir () {
    return $('.reservoirs')
  }

  get reservoirAccordion () {
    return $("//div[@class='reservoirs']//details[1]//summary[1]")
  }

  get groundwater () {
    return $("//body/div[@class='govuk-width-container ']/main[@id='main-content']/div[@id='risk-page']/div[@class='govuk-grid-row']/div[@class='govuk-grid-column-two-thirds']/div[@class='page-summary']/details[1]")
  }

  // Risk Rivers and Sea - What you can do accordion
  get accordionRiversSea () {
    return $$('.rivers-sea .govuk-details__text')
  }

  get accordionSurfaceWater () {
    return $$('.surface-water .govuk-details__text')
  }

  get accordionReservoir () {
    return $$('.reservoirs .govuk-details__text')
  }

  get accordionGroundwater () {
    return $$('.reservoirs .govuk-details__text')
  }
}
module.exports = new RiskDisplayPO()
