const postcodepage = require('../page_objects/login_page')
const addresspage = require('../page_objects/address_page')
const cookiebannerpage = require('../page_objects/cookie_banner_page')
const searchresultcount = require('../test_data/address_search_test')
const { expect, assert } = require('chai')

describe('Check the address result set for a postcode', async () => {
  it('Enter postcode and check the result set', async () => {
    await browser.url('')
    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[0])
    await expect(cookiebannerpage.cookieAcceptbutton).exist
    await cookiebannerpage.cookieAcceptbutton.click()
    await browser.pause(3000)
    await expect(cookiebannerpage.hideMessagebutton).exist
    await cookiebannerpage.hideMessagebutton.click()
    for (let i = 0; i < searchresultcount.length; i++) {
      const { postcode, expectedResultCount } = searchresultcount[i]
      await browser.url('')
      await browser.setWindowSize(1800, 800)
      const handles = await browser.getWindowHandles()
      await browser.switchToWindow(handles[0])
      await expect(cookiebannerpage.cookieAcceptbutton).exist
      await expect(postcodepage.postcodeTextbox.setValue(postcode))
      await browser.pause(3000)
      await expect(postcodepage.postCodePageContinueCommandButton.click())
      const newhandle = await browser.getWindowHandles()
      await browser.switchToWindow(newhandle[0])
      await browser.pause(3000)
      await addresspage.addressCombo.waitForExist({ timeout: 6000 })
      await addresspage.addressCombo.exist
      await addresspage.addressComboText.exist
      const dropdownText = await addresspage.addressComboText.getText()
      const resultcount = await dropdownText.slice(0, dropdownText.indexOf(' '))
      await assert.equal(resultcount, expectedResultCount, 'The counts are equal')
    }
  })
})
