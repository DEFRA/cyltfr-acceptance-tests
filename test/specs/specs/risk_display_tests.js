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

const riskDisplayDataFile = require('../test_data/risk_display_data')
// adding to read the file for SW, RS, Res and GW content check
const fs = require('fs')

describe('Check risk displays are as expected', async () => {
// loop over each object in the array of data
  riskDisplayDataFile.riskDisplayData.forEach(function (item) {
    it('Should open the page and submit a postcode search', async () => {
      console.log('*** Check risk displays are as expected - TEST CASE ', item.testCase)
      // open browser at postcode search with capture bypass token
      await browser.url(`${global.capchaBypass}`)
      const commonFunctions = require('../page_objects/common_functions')
      const postcodePage = require('../page_objects/postcode_page')
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
      const addressPage = require('../page_objects/address_page')
      const propertyRiskPage = require('../page_objects/risk_display_page')
      await addressPage.selectAddress(item.dropDownValue)
      await addressPage.clickContinue()
      // check the risk assessment page is loaded and the expected address has been summarised
      expect(await browser.getUrl()).equals(`${baseUrl}/risk#`)
      expect(await browser.getTitle()).equals('Flood risk summary - Check your long term flood risk - GOV.UK')
      expect(await propertyRiskPage.confirmAddressDetail()).contains(item.houseNumber, item.postcode)
    })

    it('Should display the correct risk values for the selected property', async () => {
      // Check for surface water static content
      const propertyRiskPage = require('../page_objects/risk_display_page')
      if (item.surfaceWaterRisk === 'High risk') {
        await propertyRiskPage.clickMoreAboutSurfaceWaterFloodRisk()

        expect(await browser.getUrl()).contains(`${baseUrl}/surface-water`)
        expect(await browser.getTitle()).equals(
          'Surface water: understand your flood risk - Check your long term flood risk - GOV.UK'
        )
        console.log('*************SW High Risk static content check started*********************')
        const propertyRiskPage = require('../page_objects/risk_display_page')

        const surfacewaterContents = await propertyRiskPage.getSurfaceWaterContents()

        const councilDetails = await propertyRiskPage.getsurfaceWaterCouncilDetails()

        const surfacewaterStaticContentFile = fs.readFileSync('./test/specs/content_data/SW_HighRisk.txt', 'utf8')

        const values = await propertyRiskPage.getCouncilDetails(surfacewaterStaticContentFile, councilDetails)

        expect(surfacewaterContents).to.contains(values.surfacewaterModifiedFile.toString().replace(/\r\n/g, '\n'))
        console.log('*************SW High Risk static content check completed*********************')
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
        console.log('*************SW Medium Risk static content check completed*********************')
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
        console.log('*************SW Low Risk static content check completed*********************')
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
        console.log('*************SW Very Low Risk static content check completed*********************')
      } else if (item.surfaceWaterRisk === 'Medium to High risk') {
        await propertyRiskPage.clickMoreAboutSurfaceWaterFloodRisk()

        expect(await browser.getUrl()).contains(`${baseUrl}/surface-water`)
        expect(await browser.getTitle()).equals(
          'Surface water: understand your flood risk - Check your long term flood risk - GOV.UK'
        )
        console.log('*************SW Medium to High risk static content check started*********************')

        const surfacewaterContents = await propertyRiskPage.getSurfaceWaterContents()

        const councilDetails = await propertyRiskPage.getsurfaceWaterCouncilDetails()

        const surfacewaterStaticContentFile = fs.readFileSync('./test/specs/content_data/SW_Medium_to_HighRisk.txt', 'utf8')

        const values = await propertyRiskPage.getCouncilDetails(surfacewaterStaticContentFile, councilDetails)

        expect(surfacewaterContents).to.contains(values.surfacewaterModifiedFile.toString().replace(/\r\n/g, '\n'))
        console.log('*************SW Medium to High risk static content check completed*********************')

        if (item.surfaceWaterDepth === true) {
          console.log('*************Navigate to Surface water Depth page*********************')
          await propertyRiskPage.clickOnSurfaceWaterDepth()
          expect(await browser.getUrl()).contains(`${baseUrl}/surface-water-depth`)
          expect(await browser.getTitle()).equals(
            'Surface water: possible flood depths - Check your long term flood risk - GOV.UK'
          )

          console.log('*************Surface water Depth page static content check started*********************')

          const surfaceWaterDepthStaticContentFile = fs.readFileSync('./test/specs/content_data/SW_Medium_to_HighRisk_Depth.txt', 'utf8')

          expect(await propertyRiskPage.getsurfaceWaterDepthContents()).to.contains(surfaceWaterDepthStaticContentFile.toString())

          console.log('*************Surface water Depth page static content check completed*********************')

          await propertyRiskPage.clickOnBackToSummary()
        }
      } else if (item.surfaceWaterRisk === 'Low to Medium risk') {
        await propertyRiskPage.clickMoreAboutSurfaceWaterFloodRisk()

        expect(await browser.getUrl()).contains(`${baseUrl}/surface-water`)
        expect(await browser.getTitle()).equals(
          'Surface water: understand your flood risk - Check your long term flood risk - GOV.UK'
        )
        console.log('*************SW Low to Medium risk static content check started*********************')

        const surfacewaterContents = await propertyRiskPage.getSurfaceWaterContents()

        const councilDetails = await propertyRiskPage.getsurfaceWaterCouncilDetails()

        const surfacewaterStaticContentFile = fs.readFileSync('./test/specs/content_data/SW_Low_to_MediumRisk.txt', 'utf8')

        const values = await propertyRiskPage.getCouncilDetails(surfacewaterStaticContentFile, councilDetails)

        expect(surfacewaterContents).to.contains(values.surfacewaterModifiedFile.toString().replace(/\r\n/g, '\n'))
        console.log('*************SW Low to Medium risk static content check completed*********************')
      } else if (item.surfaceWaterRisk === 'Very low to Low risk') {
        await propertyRiskPage.clickMoreAboutSurfaceWaterFloodRisk()

        expect(await browser.getUrl()).contains(`${baseUrl}/surface-water`)
        expect(await browser.getTitle()).equals(
          'Surface water: understand your flood risk - Check your long term flood risk - GOV.UK'
        )
        console.log('*************SW Very low to Low risk static content check started*********************')

        const surfacewaterContents = await propertyRiskPage.getSurfaceWaterContents()

        const councilDetails = await propertyRiskPage.getsurfaceWaterCouncilDetails()

        const surfacewaterStaticContentFile = fs.readFileSync('./test/specs/content_data/SW_VeryLow_to_LowRisk.txt', 'utf8')

        const values = await propertyRiskPage.getCouncilDetails(surfacewaterStaticContentFile, councilDetails)

        expect(surfacewaterContents).to.contains(values.surfacewaterModifiedFile.toString().replace(/\r\n/g, '\n'))
        console.log('*************SW Very low to Low risk static content check completed*********************')
      }
      // check rivers and sea static contents
      if (item.riverAndSeaRisk === 'High risk') {
        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutRiversandSeaFloodRisk()

        console.log('*************RS High Risk static content check started*********************')
        const riversseaStaticContentFile = fs.readFileSync('./test/specs/content_data/RS_HighRisk.txt', 'utf8')

        expect(await propertyRiskPage.getriversAndSeaContents()).to.contains(riversseaStaticContentFile.toString())
        console.log('*************RS High Risk static content check completed*********************')

        if (item.riverAndSeaDepth === true) {
          console.log('*************Navigate to Rivers and Sea Depth page*********************')
          await propertyRiskPage.clickOnRiversAndSeaDepth()
          expect(await browser.getUrl()).contains(`${baseUrl}/rivers-and-sea-depth`)
          expect(await browser.getTitle()).equals(
            'Rivers and the sea: possible flood depths - Check your long term flood risk - GOV.UK'
          )

          console.log('*************Rivers and Sea Depth page static content check started*********************')

          const riversseaDepthStaticContentFile = fs.readFileSync('./test/specs/content_data/RS_HighRisk_Depth.txt', 'utf8')

          expect(await propertyRiskPage.getriversAndSeaDepthContents()).to.contains(riversseaDepthStaticContentFile.toString())

          console.log('*************Rivers and Sea Depth page static content check completed*********************')

          await propertyRiskPage.clickOnBackToSummary()
        }
      } else if (item.riverAndSeaRisk === 'Medium risk') {
        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutRiversandSeaFloodRisk()

        console.log('*************RS Medium Risk static content check started*********************')
        const riversseaStaticContentFile = fs.readFileSync('./test/specs/content_data/RS_MediumRisk.txt', 'utf8')

        expect(await propertyRiskPage.getriversAndSeaContents()).to.contains(riversseaStaticContentFile.toString())
        console.log('*************RS Medium Risk static content check completed*********************')
      } else if (item.riverAndSeaRisk === 'Low risk') {
        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutRiversandSeaFloodRisk()

        console.log('*************RS Low Risk static content check started*********************')
        const riversseaStaticContentFile = fs.readFileSync('./test/specs/content_data/RS_LowRisk.txt', 'utf8')

        expect(await propertyRiskPage.getriversAndSeaContents()).to.contains(riversseaStaticContentFile.toString())
        console.log('*************RS Low Risk static content check completed*********************')
      } else if (item.riverAndSeaRisk === 'Very low risk') {
        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutRiversandSeaFloodRisk()

        console.log('*************RS Very Low Risk static content check started*********************')
        const riversseaStaticContentFile = fs.readFileSync('./test/specs/content_data/RS_VeryLowRisk.txt', 'utf8')

        expect(await propertyRiskPage.getriversAndSeaContents()).to.contains(riversseaStaticContentFile.toString())
        console.log('*************RS Very Low Risk static content check completed*********************')
      } else if (item.riverAndSeaRisk === 'Low to Medium risk') {
        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutRiversandSeaFloodRisk()

        console.log('*************RS Low to Medium risk static content check started*********************')
        const riversseaStaticContentFile = fs.readFileSync('./test/specs/content_data/RS_Low_to_MediumRisk.txt', 'utf8')

        expect(await propertyRiskPage.getriversAndSeaContents()).to.contains(riversseaStaticContentFile.toString())
        console.log('*************RS Low to Medium risk static content check completed*********************')
      } else if (item.riverAndSeaRisk === 'Medium to High risk') {
        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutRiversandSeaFloodRisk()

        console.log('*************RS Medium to High risk static content check started*********************')
        const riversseaStaticContentFile = fs.readFileSync('./test/specs/content_data/RS_Medium_to_HighRisk.txt', 'utf8')

        expect(await propertyRiskPage.getriversAndSeaContents()).to.contains(riversseaStaticContentFile.toString())
        console.log('*************RS Medium to High risk static content check completed*********************')
      } else if (item.riverAndSeaRisk === 'Very low to Low risk') {
        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutRiversandSeaFloodRisk()

        console.log('*************RS Very low to Low risk static content check started*********************')
        const riversseaStaticContentFile = fs.readFileSync('./test/specs/content_data/RS_VeryLow_to_LowRisk.txt', 'utf8')

        expect(await propertyRiskPage.getriversAndSeaContents()).to.contains(riversseaStaticContentFile.toString())
        console.log('*************RS Very low to Low risk static content check completed*********************')
      }
      // if the reservoir risk is expected to be true (in data file)
      if (item.reservoirRisk === true) {
        console.log('*********** STARTED******************')

        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutGroundWaterandReservoirs()

        await expect(await propertyRiskPage.getReservoirRisk()).to.contain('There is a risk of flooding from reservoirs in this area.')

        console.log('*********** COMPLETE******************')
      } else {
        console.log('***********RESERVOIR NO RISK CHECK STARTED******************')

        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutGroundWaterandReservoirs()

        await expect(await propertyRiskPage.getReservoirRisk()).to.contain('Flooding from reservoirs is unlikely in this area.')

        console.log('***********RESERVOIR NO RISK CHECK COMPLETE******************')
      }
      // if the groundwater risk is expected (in data file)
      if (item.groundwaterRisk === true) {
        console.log('***********GROUNDWATER RISK CHECK STARTED******************')

        await expect(await propertyRiskPage.getGroundwaterRisk()).to.contain('Flooding is possible when groundwater levels are high.')

        console.log('***********GROUNDWATER RISK CHECK COMPLETE******************')
      } else {
        console.log('***********GROUNDWATER NO RISK CHECK STARTED******************')

        await propertyRiskPage.clickOnBackToSummary()

        await propertyRiskPage.clickMoreAboutGroundWaterandReservoirs()

        await expect(await propertyRiskPage.getGroundwaterRisk()).to.contain('Flooding from groundwater is unlikely in this area.')

        console.log('***********GROUNDWATER NO RISK CHECK COMPLETE******************')
      }
    })
  })
})
