'use strict'

const postcodePage = require('../page_objects/postcode_page')
const postcodeErrorPage = require('../page_objects/postcode_error_page')
const postcodeDataFile = require('../test_data/postcode_data')
const addressPage = require('../page_objects/address_page')
// adding the common function
const commonFunction = require('../page_objects/common_functions')

describe('Postcode page content tests', async () => {
  it('Should have the expected content in the correct page elements', async () => {
    // open browser at postcode search with capture bypass token
    await browser.url(`${global.capchaBypass}`)

    // check browser is open on correct page and tab title is as expected
    // expect(await browser.getTitle()).equals('Where do you want to check? - Check your long term flood risk - GOV.UK')
    await commonFunction.getTitle('Where do you want to check? - Check your long term flood risk - GOV.UK')
    expect(await browser.getUrl()).equals(`${baseUrl}${global.capchaBypass}`)

    // add content checks here
  })
})

describe('Postcode page sad path tests', async () => {
  postcodeDataFile.invalidPostcode.forEach(function (item) {
    it('Should produce an error message when an invalid postcode is provided', async () => {
      console.log('*** INVALID POSTCODE ERROR TEST CASE ', item.testCase)
      // open browser at postcode search with capture bypass token
      await browser.url(`${global.capchaBypass}`)

      // check browser is open on correct page and tab title is as expected
      // fix for the Jenkins build failure
      await commonFunction.getTitle('Where do you want to check? - Check your long term flood risk - GOV.UK')

      expect(await browser.getUrl()).equals(`${baseUrl}${global.capchaBypass}`)

      // pass in postcode search string and then click continue
      await postcodePage.enterPostcode(item.postcode)
      await postcodePage.contBtn.click()

      // check the expected error message is produced

      expect(await postcodePage.getPostcodeBannerMessage()).equals('Enter a full postcode in England')
      expect(await postcodePage.getPostcodeErrorMessage()).equals('Error:\nEnter a full postcode in England')
    })
  })

  postcodeDataFile.northerIrelandPostcode.forEach(function (item) {
    it('Should result in England only page when Northern Ireland postcode provided', async () => {
      console.log('***NI POSTCODE ERROR TEST CASE ', item.testCase)
      // open browser at postcode search with capture bypass token
      await browser.url(`${global.capchaBypass}`)

      // check browser is open on correct page and tab title is as expected
      // fix for the Jenkins build failure
      await commonFunction.getTitle('Where do you want to check? - Check your long term flood risk - GOV.UK')
      // expect(await browser.getTitle()).equals('Where do you want to check? - Check your long term flood risk - GOV.UK')
      expect(await browser.getUrl()).equals(`${baseUrl}${global.capchaBypass}`)

      // pass in postcode search string and then click continue
      await postcodePage.enterPostcode(item.postcode)
      await postcodePage.contBtn.click()

      // check the expected error page is produced
      expect(await postcodeErrorPage.getPageHeading()).equals('This service is for postcodes in England only')
      // expect(await browser.getTitle()).equals('Check your long term flood risk - Check your long term flood risk - GOV.UK')
      await commonFunction.getTitle('Check your long term flood risk - Check your long term flood risk - GOV.UK')
      expect(await browser.getUrl()).equals(`${baseUrl}/england-only?postcode=BT8%204AA&region=northern-ireland#`)
    })
  })
  //* **************************************************************************************//
  postcodeDataFile.outsideUKpostcodes.forEach(function (item) {
    it('Should result in England only page when Scotland or Wales postcode provided', async () => {
      console.log('***SCOTLAND OR WALES POSTCODE ERROR TEST CASE ', item.testCase)
      // open browser at postcode search with capture bypass token
      await browser.url(`${global.capchaBypass}`)

      // check browser is open on correct page and tab title is as expected
      // fix for the Jenkins build failure
      await commonFunction.getTitle('Where do you want to check? - Check your long term flood risk - GOV.UK')
      // expect(await browser.getTitle()).equals('Where do you want to check? - Check your long term flood risk - GOV.UK')
      expect(await browser.getUrl()).equals(`${baseUrl}${global.capchaBypass}`)

      // pass in postcode search string and then click continue
      await postcodePage.enterPostcode(item.postcode)
      await postcodePage.contBtn.click()

      // check address page
      // expect(await browser.getTitle()).equals('Select an address - Check your long term flood risk - GOV.UK')
      await commonFunction.getTitle('Select an address - Check your long term flood risk - GOV.UK')

      // selecting the address from the combo
      await addressPage.selectAddress(1)
      await addressPage.clickContinue()

      // check the expected error page is produced
      expect(await postcodeErrorPage.getPageHeading()).equals('This service is for postcodes in England only')
      // expect(await browser.getTitle()).equals('Check your long term flood risk - Check your long term flood risk - GOV.UK')
      await commonFunction.getTitle('Check your long term flood risk - Check your long term flood risk - GOV.UK')
      expect(await browser.getUrl()).contains(`${baseUrl}/england-only`)
    })
  })
  // It should result in expected number of address options following a valid seach (see nightwatch test 'valid-search')

  // It should result in silverline error message when script injection attack is attempted
  postcodeDataFile.silverlineError.forEach(function (item) {
    it('Should result in Error message Silverline message when javascript entered', async () => {
      console.log('***SILVERLINE ERROR MESSAGE', item.postcode)
      // open browser at postcode search with capture bypass token
      await browser.url(`${global.capchaBypass}`)

      // check browser is open on correct page and tab title is as expected
      // fix for the Jenkins build failure
      await commonFunction.getTitle('Where do you want to check? - Check your long term flood risk - GOV.UK')
      // expect(await browser.getTitle()).equals('Where do you want to check? - Check your long term flood risk - GOV.UK')
      expect(await browser.getUrl()).equals(`${baseUrl}${global.capchaBypass}`)

      // pass in postcode search string and then click continue
      await postcodePage.enterPostcode(item.postcode)
      await postcodePage.contBtn.click()

      // check the expected error page is produced. Different error if we're caught by silverline or not

      expect(await postcodeErrorPage.getPageHeading()).equals('Where do you want to check?')
    })

    //* ************Error message for valid but Empty postcode
    postcodeDataFile.emptyPostcode.forEach(function (item) {
      it('Should result in Error message when postcode with Empty result', async () => {
        console.log('***EMPTY POSTCODE ERROR MESSAGE', item.postcode)
        // open browser at postcode search with capture bypass token
        await browser.url(`${global.capchaBypass}`)

        // check browser is open on correct page and tab title is as expected
        // fix for the Jenkins build failure
        await commonFunction.getTitle('Where do you want to check? - Check your long term flood risk - GOV.UK')
        // expect(await browser.getTitle()).equals('Where do you want to check? - Check your long term flood risk - GOV.UK')
        expect(await browser.getUrl()).equals(`${baseUrl}${global.capchaBypass}`)

        // pass in postcode search string and then click continue
        await postcodePage.enterPostcode(item.postcode)
        await postcodePage.contBtn.click()

        // check the expected error message is produced

        expect(await postcodePage.getPostcodeBannerMessage()).equals('This postcode does not appear to exist')
        expect(await postcodePage.getPostcodeErrorMessage()).equals('Error:\nThis postcode does not appear to exist')
      })
    })
  })
})
