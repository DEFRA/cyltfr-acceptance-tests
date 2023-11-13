'use strict'

const postcodePage = require('../page_objects/postcode_page')
// const addressPage = require('../page_objects/address_page')

describe('Check Your Long Term Flood Risk, Address page', async () => {
  it('Should open the page and enter the postcode', async () => {
    await browser.url('')
    expect(await browser.getTitle()).equals('Where do you want to check? - Check your long term flood risk - GOV.UK')
    expect(await browser.getUrl()).equals(`${baseUrl}/postcode`)
    await expect(postcodePage.postcodeTextbox.setValue('WA41AB'))
    await expect(postcodePage.clickContinue())
  })

  // it should display error message when no address selected and continue is clicked

  // it should display england only addresses error page, when an address outside england is selected
})
