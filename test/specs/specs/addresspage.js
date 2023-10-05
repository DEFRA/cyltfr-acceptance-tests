/* global browser it describe */
const postcodePO = require('../page_objects/postcode_PO')
const addressPO = require('../page_objects/address_PO')
const { expect, assert } = require('chai')

describe('Check Your Long Term Flood Risk, Address page', async () => {
  it('Open the page and Enter the postcode', async () => {
    await browser.url('')
    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[0])
    await expect(postcodePO.postcodeTextbox.setValue('WA41AB'))
    await browser.pause(6000)
    await expect(postcodePO.postCodePageContinueCommandButton.click())
    await browser.switchToWindow(handles[0])
    await browser.pause(3000)
  })

  it('Check the title and URL of address page', async () => {
    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[0])
    await expect(addressPO.heading).exist
    await expect(addressPO.subHeading1).exist
    await expect(addressPO.subHeading2).exist
    browser.pause(3000)
  })

  it('Check the contents of the address page', async () => {
    await expect(addressPO.postcodeTitle).exist
    await expect(addressPO.postcode).exist
    await expect(addressPO.postcodeChange).exist
    await expect(addressPO.selectaddressTitle).exist
    await expect(addressPO.addressCombo).exist
    await expect(addressPO.addressContinueButton).exist
  })

  /** Checking the error message */
  it('Do not select any address', async () => {
    await addressPO.addressContinueButton.click()
    await expect(addressPO.addressError.waitForExist({ timeOut: 30000 })).exist
    // await browser.pause(3000)
    await assert.equal(await addressPO.addressError.getText(), 'Error: Select an address', '')
  })
})
