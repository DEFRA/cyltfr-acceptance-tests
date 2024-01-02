'use strict'
/*
POINTS TO NOTE
- There are currently 30+ test cases in the data file.  It might be sensible to split these out into logical arrays.
- This would allow for parallel running and reduced run time, and be easier to maintain/fault find - but would need multiple spec
  files to run what is essentially the same test.
- Theres probably duplicate test cases in the data file, these should be removed.
- Currently the test is only looking for the banner info for each risk type, further assertions should be made on the key supporting content.
- There is no check for hierarchy of risk type/risk score.  If there is logic in the app for this, then a new test is needed to check this.
*/

const postcodePage = require('../page_objects/postcode_page')
const addressPage = require('../page_objects/address_page')
const riskDisplayDataFile = require('../test_data/risk_display_data')
const propertyRiskPage = require('../page_objects/risk_display_page')
const commonFunctions = require('../page_objects/common_functions')

describe('Check risk displays are as expected', async () => {
// loop over each object in the array of data
  riskDisplayDataFile.riskDisplayData.forEach(function (item) {
    it('Should open the page and submit a postcode search', async () => {
      console.log('*** Check risk displays are as expected - TEST CASE ', item.testCase)
      // open browser at postcode search with capture bypass token
      await browser.url(`${global.capchaBypass}`)

      // check browser is open on correct page and tab title is as expected
      //expect(await browser.getTitle()).equals('Where do you want to check? - Check your long term flood risk - GOV.UK')
      await commonFunctions.getTitle('Where do you want to check? - Check your long term flood risk - GOV.UK')
      expect(await browser.getUrl()).equals(`${baseUrl}${global.capchaBypass}`)

      // pass in postcode search string and then click continue
      await postcodePage.enterPostcode(item.postcode)
      await postcodePage.clickContinue()

      // check next page is presented as expected
     // expect(await browser.getTitle()).equals('Select an address - Check your long term flood risk - GOV.UK')
      await commonFunctions.getTitle('Select an address - Check your long term flood risk - GOV.UK')
    })

    it('Should select the correct address from the options and move to the summary page', async () => {
      // on address page, select the address from the data file, check the continue button is on the page and click it
      await addressPage.selectAddress(item.dropDownValue)
      await addressPage.clickContinue()
      // check the risk assessment page is loaded and the expected address has been summarised
      expect(await browser.getUrl()).equals(`${baseUrl}/risk#`)
      expect(await browser.getTitle()).equals('Your long term flood risk assessment - Check your long term flood risk - GOV.UK')
      expect(await propertyRiskPage.confirmAddressDetail()).contains(item.houseNumber, item.postcode)
    })

    it('Should display the correct risk values for the selected property', async () => {
      // check the river and sea risk is as expected
      expect(await propertyRiskPage.getRiversAndSeaRisk()).equals(item.riverAndSeaRisk)

      // check the surface water risk is as expected
      expect(await propertyRiskPage.getSurfaceWaterRisk()).to.contain(item.surfaceWaterRisk)

      // if the reservoir risk is expected to be true (in data file)
      if (item.reservoirRisk === true) {
        // check the reservoir risk message is correct
        await expect(await propertyRiskPage.getReservoirRisk()).to.contain('There is a risk of flooding from reservoirs in this area.')
      } else {
        // else check the reservoir no risk is correct
        await expect(await propertyRiskPage.getReservoirRisk()).to.contain('Flooding from reservoirs is unlikely in this area.' +
        '\n\nWhat a reservoir is and how we check an area\'s risk')
      }

      // if the groundwater risk is expected (in data file)
      if (item.groundwaterRisk === true) {
        // check the groundwater risk message is correct
        await expect(await propertyRiskPage.getGroundwaterRisk()).to.contain('Groundwater Flooding is possible when groundwater levels are high.' +
        '\n\nWhat groundwater is and how we check an area\'s risk')
        // else if the groundwater no risk message is expected (in data file file)
      } else {
        // check the groundwater no risk message is correct
        await expect(await propertyRiskPage.getGroundwaterRisk()).to.contain('Groundwater Flooding from groundwater is unlikely in this area.' +
        '\n\nWhat groundwater is and how we check an area\'s risk')
      }
    })
  })
})
