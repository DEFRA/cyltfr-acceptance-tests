'use strict'
/*
POINTS TO NOTE
- There are currently 30+ test cases in the data file.  It would be sensible to split these out into logical arrays.
- This would allow for parallel running and reduced run time, and be easier to maintain/fault find.
- If the data is logically split, the describe blocks will need to be replicated for each logical array of test cases.
- There is some test data which does not have groundwater value (this was copied from legacy).  This data should be added to provide better view of test coverage.
- Theres probably duplicate test cases, these should be removed.
- Currently the test is only looking for the banner info for each risk type, further assertions should be made on the key supporting content.
- There is no check for hierarchy of risk type/risk score.  If there is logic in the app for this, then a seperate test is needed to check this.
*/

const postcodePage = require('../page_objects/postcode_page')
const addressPage = require('../page_objects/address_page')
const riskDisplayDataFile = require('../test_data/risk_display_data')
const propertyRiskPage = require('../page_objects/risk_display_page')
const { expect } = require('chai')

describe('Check Your Long Term FLood Risk, risk display type is provided when expected', async () => {
// loop over each object in the array of data
  riskDisplayDataFile.riskDisplayData.forEach(function (item) {
    it('Should open the page and submit a postcode search', async () => {
      console.log('***** TEST CASE ', item.testCase)
      // open browser at postcode search with capture bypass token
      await browser.url('/postcode?captchabypass=ce3340ab3695f81da8d7b50875f3819e')

      // check browser is open on correct page and tab title is as expected
      expect(await browser.getTitle()).equals('Where do you want to check? - Check your long term flood risk - GOV.UK')
      expect(await browser.getUrl()).equals(`${baseUrl}/postcode?captchabypass=ce3340ab3695f81da8d7b50875f3819e`)

      // pass in postcode search string and then click continue
      await postcodePage.postcodeTextbox.setValue(item.postcode)
      await postcodePage.postCodePageContinueCommandButton.click()

      // check next page is presented as expected
      expect(await browser.getTitle()).equals('Select an address - Check your long term flood risk - GOV.UK')
    })

    it('Should select the correct address from the options and move to the summary page', async () => {
      // on address page, select the address from the data file, check the continue button is on the page and click it
      await addressPage.selectAddress(item.dropDownValue)
      await expect(await addressPage.addressContinueButton).exist
      await addressPage.addressContinueButton.click()
      // check the risk assessment page is loaded and the expected address has been summarised
      expect(await browser.getUrl()).equals(`${baseUrl}/risk#`)
      expect(await browser.getTitle()).equals('Your long term flood risk assessment - Check your long term flood risk - GOV.UK')
      expect(await propertyRiskPage.confirmAddressDetail()).contains(item.houseNumber, item.postcode)
    })

    it('Should display the correct risk values for the selected property', async () => {
      // check the river and sea risk is as expected
      expect(await propertyRiskPage.getRiversAndSeaRisk()).equals(item.riverAndSeaRisk)
      // check the surface water risk is as expected
      expect(await propertyRiskPage.getSurfaceWaterRisk()).equals(item.surfaceWaterRisk)

      // if the reservoir risk is expected to be true (in data file)
      if (item.reservoirRisk === true) {
        // check the reservoir risk message is correct
        expect(await propertyRiskPage.getReservoirRiskTrue()).equals('There is a risk of flooding from reservoirs in this area')
      } else {
        // else check the reservoir no risk is correct
        expect(await propertyRiskPage.getReservoirRiskFalse()).equals('Flooding from reservoirs is unlikely in this area')
      }

      // if the groundwater risk is expected (in data file)
      if (item.groundwaterRisk === true) {
        // check the groundwater risk message is correct
        expect(await propertyRiskPage.getGroundwaterRiskTrue()).equals('Flooding is possible in the local area when groundwater levels are high')
        // else if the groundwater no risk message is expected (in data file file)
      } else if (item.groundwaterRisk === false) {
        // check the groundwater no risk message is correct
        expect(await propertyRiskPage.getGroundwaterRiskFalse()).equals('Flooding from reservoirs is unlikely in this area')
      } else {
        // else log out no groundwater value (tech debt to go through all data test cases to add GW value)
        console.log('No groundwater value, assertion not made')
      }
    })
  })
})
