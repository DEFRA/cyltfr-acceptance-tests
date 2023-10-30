'use strict'

const postcodePage = require('../page_objects/postcode_page')
const postcodeDataFile = require('../test_data/postcode_data')

describe('Postcode sad path tests', async () => {
  postcodeDataFile.invalidPostcode.forEach(function (item) {
    it('Should produce an error message when an invalid postcode is provided', async () => {
      console.log('***** TEST CASE ', item.testCase)
      // open browser at postcode search with capture bypass token
      await browser.url('/postcode?captchabypass=ce3340ab3695f81da8d7b50875f3819e')

      // check browser is open on correct page and tab title is as expected
      expect(await browser.getTitle()).equals('Where do you want to check? - Check your long term flood risk - GOV.UK')
      expect(await browser.getUrl()).equals(`${baseUrl}/postcode?captchabypass=ce3340ab3695f81da8d7b50875f3819e`)

      // pass in postcode search string and then click continue
      await postcodePage.postcodeTextbox.setValue(item.postcode)
      await postcodePage.postCodePageContinueCommandButton.click()

      // check the expected error message is produced
    })
  })

  postcodeDataFile.northerIrelandPostcode.forEach(function (item) {
    it('Should result in England only page when Northern Ireland postcode provided', async () => {
      console.log('***** TEST CASE ', item.testCase)
      // open browser at postcode search with capture bypass token
      await browser.url('/postcode?captchabypass=ce3340ab3695f81da8d7b50875f3819e')

      // check browser is open on correct page and tab title is as expected
      expect(await browser.getTitle()).equals('Where do you want to check? - Check your long term flood risk - GOV.UK')
      expect(await browser.getUrl()).equals(`${baseUrl}/postcode?captchabypass=ce3340ab3695f81da8d7b50875f3819e`)

      // pass in postcode search string and then click continue
      await postcodePage.postcodeTextbox.setValue(item.postcode)
      await postcodePage.postCodePageContinueCommandButton.click()

      // check the expected erro page is produced
    })
  })
})
