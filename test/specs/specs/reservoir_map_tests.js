'use strict'
const postcodePage = require('../page_objects/postcode_page')
const addressPage = require('../page_objects/address_page')
const reservoirDataFile = require('../test_data/reservoir_map_data')
const propertyRiskPage = require('../page_objects/risk_display_page')
const commonFunctions = require('../page_objects/common_functions')
const riverSeaMapPage = require('../page_objects/river_sea_map_page')

describe('Check map data is displayed as expected', async () => {
  // loop over each object in the array of data
  reservoirDataFile.reservoirData.forEach(function (item) {
    it('Should open the page and submit a postcode search', async () => {
      console.log(
        '*** Check map data is displayed as expected - TEST CASE ',
        item.testCase
      )
      // open browser at postcode search with capture bypass token
      await browser.url(`${global.capchaBypass}`)
      // check browser is open on correct page and tab title is as expected
      await commonFunctions.getTitle(
        'Where do you want to check? - Check your long term flood risk - GOV.UK'
      )
      expect(await browser.getUrl()).equals(`${baseUrl}${global.capchaBypass}`)

      // pass in postcode search string and then click continue
      await postcodePage.acceptCookies()
      await postcodePage.enterPostcode(item.postcode)
      await postcodePage.clickContinue()

      await commonFunctions.getTitle(
        'Select an address - Check your long term flood risk - GOV.UK'
      )
    })

    it('Should select the correct address from the options and move to the summary page', async () => {
      // on address page, select the address from the data file, check the continue button is on the page and click it
      await addressPage.selectAddress(item.dropDownValue)
      await addressPage.clickContinue()
      // check the risk assessment page is loaded and the expected address has been summarised
      expect(await browser.getUrl()).equals(`${baseUrl}/risk#`)
      expect(await browser.getTitle()).equals(
        'Flood risk summary - Check your long term flood risk - GOV.UK'
      )
      expect(await propertyRiskPage.confirmAddressDetail()).contains(
        item.postcode
      )
    })

    it('Click and View map of flood risk from rivers and the sea and verify links', async () => {
      // on risk assessment page, click on more about rivers and the sea
      await propertyRiskPage.clickMoreAboutRiversandSeaFloodRisk()

      expect(await browser.getUrl()).contains(`${baseUrl}/rivers-and-sea`)
      expect(await browser.getTitle()).equals(
        'Rivers and the sea: understand your flood risk - Check your long term flood risk - GOV.UK'
      )
      // on risk assessment page, click on rivers and the sea map
      await propertyRiskPage.clickRiversandSeaMap()

      expect(await browser.getUrl()).contains(`${baseUrl}/map?`)
      expect(await browser.getTitle()).equals(
        'Rivers and sea map - Check your long term flood risk - GOV.UK'
      )

      await riverSeaMapPage.clickShowFloodingCheckBox()
      await riverSeaMapPage.clickShowFloodingCheckBox()
    })
  })
})
