'use strict'
const postcodePage = require('../page_objects/postcode_page')
const addressPage = require('../page_objects/address_page')
const reservoirDataFile = require('../test_data/reservoir_test_data')
const propertyRiskPage = require('../page_objects/risk_display_page')
const commonFunctions = require('../page_objects/common_functions')
const groundWaterDisplayPage = require('../page_objects/groundwater_display_page')

// const riverSeaMapPage = require('../page_objects/river_sea_map_page')

describe('Check map data is displayed as expected', async () => {
  // loop over each object in the array of data
  reservoirDataFile.reservoirData.forEach(function (item) {
    it('Should open the page and submit a postcode search', async () => {
      console.log(
        '*** Check map data is displayed as expected - TEST CASE ', item.testCase, item.postcode
      )
      // open browser at postcode search with capture bypass token
      await browser.url(`${global.capchaBypass}`)
      // check browser is open on correct page and tab title is as expected
      await commonFunctions.waitTitle(
        'Where do you want to check? - Check your long term flood risk - GOV.UK'
      )
      expect(await browser.getUrl()).equals(`${baseUrl}${global.capchaBypass}`)

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
      await addressPage.selectAddress(item.dropDownValue)
      await addressPage.clickContinue()
      // check the risk assessment page is loaded and the expected address has been summarised0
      await commonFunctions.waitTitle('Flood risk summary - Check your long term flood risk - GOV.UK')

      expect(await browser.getUrl()).equals(`${baseUrl}/risk#`)
      expect(await propertyRiskPage.confirmAddressDetail()).contains(
        item.postcode
      )
    })

    it('Click and View map of flood risk from groundwater and reservoirs and verify links', async () => {
      // on risk assessment page, click on more about rivers and the sea
      await propertyRiskPage.clickMoreAboutGroundWaterandReservoirs()

      await commonFunctions.waitTitle('Groundwater and reservoirs: understand your flood risk - Check your long term flood risk - GOV.UK')
      expect(await browser.getUrl()).contains(`${baseUrl}/ground-water`)

      if (item.groundwaterRisk === true) {
        console.log('Groundwater risk is true')
        expect(await groundWaterDisplayPage.getGroundwaterRisk()).equals('Flooding from groundwater is unlikely in this area.')
      } else if (item.reservoirRisk === false) {
        console.log('Groundwater risk is false')
        expect(await groundWaterDisplayPage.getGroundwaterRisk()).equals('Flooding from groundwater is unlikely in this area.')
      }
      if (item.reservoirRisk === true) {
        console.log('Reservoir risk is true')
        expect(await groundWaterDisplayPage.getReservoirRisk()).equals('There is a risk of flooding from reservoirs in this area.')
      } else if (item.reservoirRisk === false) {
        console.log('Reservoir risk is false')
        expect(await groundWaterDisplayPage.getReservoirRisk()).equals('Flooding from reservoirs is unlikely in this area.')
      }
    })
  })
})
