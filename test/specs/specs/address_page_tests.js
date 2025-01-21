'use strict'

const addressDataFile = require('../test_data/address_data')

describe('Check Your Long Term Flood Risk, Address page', async () => {
  it('Should open the page and enter the postcode', async () => {
    await browser.url(`${global.capchaBypass}`)
    const postcodePage = require('../page_objects/postcode_page')
    const commonFunctions = require('../page_objects/common_functions')
    const addressPage = require('../page_objects/address_page')

    // check browser is open on correct page and tab title is as expected
    // Calling the method from the commonFunction
    await commonFunctions.getTitle('Where do you want to check? - Check your long term flood risk - GOV.UK')
    expect(await browser.getUrl()).equals(`${baseUrl}${global.capchaBypass}`)

    await postcodePage.enterPostcode('WA41AB')
    await postcodePage.clickContinue()

    // check address page

    // Calling the method from the commonFunction
    await commonFunctions.getTitle('Select an address - Check your long term flood risk - GOV.UK')
    // selecting NO address from the combo
    await addressPage.selectAddress(-1)
    await addressPage.clickContinue()

    // it should display error message when no address selected and continue is clicked
    expect(await addressPage.getAddressBannerMessage()).equals('Select an address')
    expect(await addressPage.getAdressErrorMessage()).equals('Error:\nSelect an address')
  })
  // it should check the result count of address for the given postcode
  addressDataFile.addressDataCount.forEach(function (item) {
    it('Should check the address result count', async () => {
      console.log('*** ADDRESS RESULT COUNT TEST CASE ', item.testCase)
      await browser.url(`${global.capchaBypass}`)
      const postcodePage = require('../page_objects/postcode_page')
      const commonFunctions = require('../page_objects/common_functions')
      const addressPage = require('../page_objects/address_page')

      // check browser is open on correct page and tab title is as expected
      // expect(await browser.getTitle()).equals('Where do you want to check? - Check your long term flood risk - GOV.UK')
      // modifying to avoid Jenkins assertion failure
      await commonFunctions.getTitle('Where do you want to check? - Check your long term flood risk - GOV.UK')
      expect(await browser.getUrl()).equals(`${baseUrl}${global.capchaBypass}`)

      await postcodePage.enterPostcode(item.postcode)
      await postcodePage.clickContinue()
      // check address page
      // fix for Jenkins failure
      // expect(await browser.getTitle()).equals('Select an address - Check your long term flood risk - GOV.UK')
      await commonFunctions.getTitle('Select an address - Check your long term flood risk - GOV.UK')
      // check address count result set
      const resultText = await addressPage.getAddressText()
      const resultcount = await resultText.slice(0, resultText.indexOf(' '))
      console.log('address count', resultcount)
      expect(await resultcount).equals(item.expectedResultCount)
    })
  })
})
