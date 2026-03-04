'use strict'
const reservoirDataFile = require('../test_data/reservoir_map_data')

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
      const commonFunctions = require('../page_objects/common_functions')
      await commonFunctions.waitTitle(
        'Where do you want to check? - Check your long term flood risk - GOV.UK'
      )
      expect(await browser.getUrl()).equals(`${baseUrl}${global.capchaBypass}`)
      const postcodePage = require('../page_objects/postcode_page')

      // pass in postcode search string and then click continue
      await postcodePage.acceptCookies()
      await postcodePage.enterPostcode(item.postcode)
      await postcodePage.clickContinue()
      await commonFunctions.waitTitle(
        'Select an address - Check your long term flood risk - GOV.UK'
      )
    })

    it('Should select the correct address from the options and move to the summary page', async () => {
      // on address page, select the address from the data file, check the continue button is on the page and click it
      const addressPage = require('../page_objects/address_page')
      await addressPage.selectAddress(item.dropDownValue)
      await addressPage.clickContinue()

      // check the risk assessment page is loaded and the expected address has been summarised
      const commonFunctions = require('../page_objects/common_functions')
      await commonFunctions.waitTitle('Flood risk summary - Check your long term flood risk - GOV.UK')
      const propertyRiskPage = require('../page_objects/risk_display_page')

      expect(await browser.getUrl()).equals(`${baseUrl}/risk#`)
      expect(await propertyRiskPage.confirmAddressDetail()).contains(
        item.postcode
      )
    })

    it('Click and View map of flood risk from rivers and the sea and verify links', async () => {
      // on risk assessment page, click on more about rivers and the sea
      const propertyRiskPage = require('../page_objects/risk_display_page')
      await propertyRiskPage.clickMoreAboutRiversandSeaFloodRisk()

      const commonFunctions = require('../page_objects/common_functions')
      await commonFunctions.waitTitle('Rivers and the sea: understand your flood risk - Check your long term flood risk - GOV.UK')
      expect(await browser.getUrl()).contains(`${baseUrl}/rivers-and-sea`)
      // on risk assessment page, click on rivers and the sea map
      await propertyRiskPage.clickRiversandSeaMap()

      await commonFunctions.waitTitle('Rivers and sea map - Check your long term flood risk - GOV.UK')
      expect(await browser.getUrl()).contains(`${baseUrl}/map?`)
      const riverSeaMapPage = require('../page_objects/river_sea_map_page')

      await riverSeaMapPage.clickShowFloodingCheckBox()
      await commonFunctions.waitUntilStable()

      await riverSeaMapPage.clickShowFloodingCheckBox()
      await commonFunctions.waitUntilStable()
    })
  })
})
