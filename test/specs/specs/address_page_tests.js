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

  // it('Check the title and URL of address page', async () => {
  //   const handles = await browser.getWindowHandles()
  //   await browser.switchToWindow(handles[0])
  //   await expect(addressPage.heading).exist
  //   await expect(addressPage.subHeading1).exist
  //   await expect(addressPage.subHeading2).exist
  //   browser.pause(3000)
  // })

  // it('Check the contents of the address page', async () => {
  //   await expect(addressPage.postcodeTitle).exist
  //   await expect(addressPage.postcode).exist
  //   await expect(addressPage.postcodeChange).exist
  //   await expect(addressPage.selectaddressTitle).exist
  //   await expect(addressPage.addressCombo).exist
  //   await expect(addressPage.addressContinueButton).exist
  // })

  // /** Checking the error message */
  // it('Do not select any address', async () => {
  //   await addressPage.addressContinueButton.click()
  //   await expect(addressPage.addressError.waitForExist({ timeOut: 30000 })).exist
  //   // await browser.pause(3000)
  //   await assert.equal(await addressPage.addressError.getText(), 'Error: Select an address', '')
  // })
})
