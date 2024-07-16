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
// adding to read the file for SW, RS, Res and GW content check
const fs = require('fs')

describe('Check risk displays are as expected', async () => {
// loop over each object in the array of data
  riskDisplayDataFile.riskDisplayData.forEach(function (item) {
    it('Should open the page and submit a postcode search', async () => {
      console.log('*** Check risk displays are as expected - TEST CASE ', item.testCase)
      // open browser at postcode search with capture bypass token
      await browser.url(`${global.capchaBypass}`)
      // check browser is open on correct page and tab title is as expected
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
      // Check for surface water static content
      if (item.surfaceWaterRisk === 'High risk') {
        await propertyRiskPage.clickMoreAboutSurfaceWaterFloodRisk()

        expect(await browser.getUrl()).contains(`${baseUrl}/surface-water`)
        expect(await browser.getTitle()).equals(
          'Surface water: understand your flood risk - Check your long term flood risk - GOV.UK'
        )
        console.log('*************SW High Risk static content check started*********************')

        const surfacewaterContents = await propertyRiskPage.getSurfaceWaterContents()

        const councilDetails = await propertyRiskPage.getsurfaceWaterCouncilDetails()

        const surfacewaterStaticContentFile = fs.readFileSync('./test/specs/content_data/SW_HighRisk.txt', 'utf8')

        const values = await propertyRiskPage.getCouncilDetails(surfacewaterStaticContentFile, councilDetails)

        expect(surfacewaterContents).to.contains(values.surfacewaterModifiedFile.toString().replace(/\r\n/g, '\n'))
      } else if (item.surfaceWaterRisk === 'Medium risk') {
        await propertyRiskPage.clickMoreAboutSurfaceWaterFloodRisk()

        expect(await browser.getUrl()).contains(`${baseUrl}/surface-water`)
        expect(await browser.getTitle()).equals(
          'Surface water: understand your flood risk - Check your long term flood risk - GOV.UK'
        )
        console.log('*************SW Medium Risk static content check started*********************')

        const surfacewaterContents = await propertyRiskPage.getSurfaceWaterContents()

        const councilDetails = await propertyRiskPage.getsurfaceWaterCouncilDetails()

        const surfacewaterStaticContentFile = fs.readFileSync('./test/specs/content_data/SW_MediumRisk.txt', 'utf8')

        const values = await propertyRiskPage.getCouncilDetails(surfacewaterStaticContentFile, councilDetails)

        expect(surfacewaterContents).to.contains(values.surfacewaterModifiedFile.toString().replace(/\r\n/g, '\n'))
      } else if (item.surfaceWaterRisk === 'Low risk') {
        await propertyRiskPage.clickMoreAboutSurfaceWaterFloodRisk()

        expect(await browser.getUrl()).contains(`${baseUrl}/surface-water`)
        expect(await browser.getTitle()).equals(
          'Surface water: understand your flood risk - Check your long term flood risk - GOV.UK'
        )
        console.log('*************SW Low Risk static content check started*********************')

        const surfacewaterContents = await propertyRiskPage.getSurfaceWaterContents()

        const councilDetails = await propertyRiskPage.getsurfaceWaterCouncilDetails()

        const surfacewaterStaticContentFile = fs.readFileSync('./test/specs/content_data/SW_LowRisk.txt', 'utf8')

        const values = await propertyRiskPage.getCouncilDetails(surfacewaterStaticContentFile, councilDetails)

        expect(surfacewaterContents).to.contains(values.surfacewaterModifiedFile.toString().replace(/\r\n/g, '\n'))
      } else if (item.surfaceWaterRisk === 'Very low risk') {
        await propertyRiskPage.clickMoreAboutSurfaceWaterFloodRisk()

        expect(await browser.getUrl()).contains(`${baseUrl}/surface-water`)
        expect(await browser.getTitle()).equals(
          'Surface water: understand your flood risk - Check your long term flood risk - GOV.UK'
        )
        console.log('*************SW Very Low Risk static content check started*********************')

        const surfacewaterContents = await propertyRiskPage.getSurfaceWaterContents()

        const councilDetails = await propertyRiskPage.getsurfaceWaterCouncilDetails()

        const surfacewaterStaticContentFile = fs.readFileSync('./test/specs/content_data/SW_VeryLowRisk.txt', 'utf8')

        const values = await propertyRiskPage.getCouncilDetails(surfacewaterStaticContentFile, councilDetails)

        expect(surfacewaterContents).to.contains(values.surfacewaterModifiedFile.toString().replace(/\r\n/g, '\n'))
      }
      // check rivers and sea static contents
      if (item.riverAndSeaRisk === 'High risk') {
        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutRiversandSeaFloodRisk()

        console.log('*************RS High Risk static content check started*********************')
        const riversseaStaticContentFile = fs.readFileSync('./test/specs/content_data/RS_HighRisk.txt', 'utf8')

        expect(await propertyRiskPage.getriversAndSeaContents()).to.contains(riversseaStaticContentFile.toString())
      } else if (item.riverAndSeaRisk === 'Medium risk') {
        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutRiversandSeaFloodRisk()

        console.log('*************RS Medium Risk static content check started*********************')
        const riversseaStaticContentFile = fs.readFileSync('./test/specs/content_data/RS_MediumRisk.txt', 'utf8')

        expect(await propertyRiskPage.getriversAndSeaContents()).to.contains(riversseaStaticContentFile.toString())
      } else if (item.riverAndSeaRisk === 'Low risk') {
        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutRiversandSeaFloodRisk()

        console.log('*************RS Low Risk static content check started*********************')
        const riversseaStaticContentFile = fs.readFileSync('./test/specs/content_data/RS_LowRisk.txt', 'utf8')

        expect(await propertyRiskPage.getriversAndSeaContents()).to.contains(riversseaStaticContentFile.toString())
      } else if (item.riverAndSeaRisk === 'Very low risk') {
        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutRiversandSeaFloodRisk()

        console.log('*************RS Very Low Risk static content check started*********************')
        const riversseaStaticContentFile = fs.readFileSync('./test/specs/content_data/RS_VeryLowRisk.txt', 'utf8')

        expect(await propertyRiskPage.getriversAndSeaContents()).to.contains(riversseaStaticContentFile.toString())
      }
      // if the reservoir risk is expected to be true (in data file)
      if (item.reservoirRisk === true) {
        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutGroundWaterandReservoirs()

        await expect(await propertyRiskPage.getReservoirRisk()).to.contain('There is a risk of flooding from reservoirs in this area.')

        console.log('***********RESERVOIR RISK CHECK COMPLETE******************')
      } else {
        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutGroundWaterandReservoirs()

        await expect(await propertyRiskPage.getReservoirRisk()).to.contain('Flooding from reservoirs is unlikely in this area.')

        console.log('***********RESERVOIR NO RISK CHECK COMPLETE******************')
      }
      // if the groundwater risk is expected (in data file)
      if (item.groundwaterRisk === true) {
        await expect(await propertyRiskPage.getGroundwaterRisk()).to.contain('Groundwater Flooding is possible when groundwater levels are high.')

        console.log('***********GROUNDWATER RISK CHECK COMPLETE******************')
      } else {
        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutGroundWaterandReservoirs()

        await expect(await propertyRiskPage.getGroundwaterRisk()).to.contain('Flooding from groundwater is unlikely in this area.')

        console.log('***********GROUNDWATER NO RISK CHECK COMPLETE******************')
      }
    })
  })
})
