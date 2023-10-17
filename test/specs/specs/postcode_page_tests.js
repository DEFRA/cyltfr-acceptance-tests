/* global browser it describe */

const { expect, assert } = require('chai')

const postcodePO = require('../page_objects/postcode_page')
const postcodeData = require('../test-data/postcode_data')
const cookieBannerPo = require('../page_objects/cookie_banner_page')

describe('Checking web elements for postcode page', async () => {
  it('Open page URL and maximize window', async () => {
    await browser.url('')
    await browser.setWindowSize(1800, 1200)
    await browser.getWindowHandles()
  })

  // To include Cookies banner and Accept the cookie message
  it('Accept the cookies and hide the message', async () => {
    await expect(cookieBannerPo.cookieAcceptbutton).exist
    await cookieBannerPo.cookieAcceptbutton.click()
    await expect(cookieBannerPo.hideMessagebutton).exist
    await cookieBannerPo.hideMessagebutton.click()
  })

  // LTFRI-771 - Changes to read data from test_data folder

  it('Check the title', async () => {
    await expect(postcodePO.title).exist
    await console.log('Title', await postcodePO.title.getText())
    await assert.equal(await postcodePO.title.getText(), postcodeData.title, '')
  })

  it('Check the subheading', async () => {
    await expect(postcodePO.subHeading).exist
    await assert.equal(await postcodePO.subHeading.getText(), postcodeData.subheading, '')
  })

  it('Check the postcodeHeading', async () => {
    await expect(postcodePO.postcodeHeading).exist
    await assert.equal(await postcodePO.postcodeHeading.getText(), postcodeData.postcodeHeading)
  })

  it('Check the postcode textbox', async () => {
    await expect(postcodePO.postcodeTextbox).exist
  })

  it('Check the postcode hint', async () => {
    await expect(postcodePO.postcodeHint).exist
    await assert.equal(await postcodePO.postcodeHint.getText(), postcodeData.postcodehint)
  })

  it('Check the continue button', async () => {
    await expect(postcodePO.postCodePageContinueCommandButton).exist
  })

  it('Check the risk flooding link', async () => {
    await expect(postcodePO.royalMailPostcodeFinderLink).exist
  })

  it('Check the Royal mail link', async () => {
    await expect(postcodePO.viewMapAreasFloodingLink).exist
  })

  // Testing for negative scenario with error messages

  it('Leave postcode blank Error message', async () => {
    // await expect(postcodePO.postcodeTextbox.setValue(''))
    await expect(postcodePO.postcodeTextbox.setValue(postcodePO.empty))
    await postcodePO.postCodePageContinueCommandButton.click()
    await expect(postcodePO.postcodeError).exist
    await assert.equal(await postcodePO.postcodeError.getText(), postcodeData.errormessage)
  })

  it('Enter an invalid format less than 4 postcode Error', async () => {
    await expect(postcodePO.postcodeTextbox.setValue(postcodeData.less))
    await postcodePO.postCodePageContinueCommandButton.click()
    expect(await postcodePO.getPostcodeErrorMessage()).to.equals(postcodePO.errormessage)
  })

  /* Need fix as currently displaying an error */
  it('Enter an invalid format more than 6 postcode Error', async () => {
    await expect(postcodePO.postcodeTextbox.setValue(postcodeData.more))
    await postcodePO.postCodePageContinueCommandButton.click()
    await expect(postcodePO.postcodeError).exist
    await assert.equal(await postcodePO.postcodeError.getText(), postcodePO.errormessage)
    await expect(postcodePO.postcodeTextbox.setValue(''))
  })

  it('Enter an invalid postcode Error', async () => {
    await expect(postcodePO.postcodeTextbox.setValue(postcodeData.alpha))
    await postcodePO.postCodePageContinueCommandButton.click()
    await expect(postcodePO.postcodeError).exist
    await assert.equal(await postcodePO.postcodeError.getText(), postcodeData.errormessage)
  })

  it('Enter special characters postcode Error', async () => {
    await expect(postcodePO.postcodeTextbox.setValue(postcodeData.specialcharacters))
    await postcodePO.postCodePageContinueCommandButton.click()
    await expect(postcodePO.postcodeError).exist
    // await assert.equal(await postcodePO.postcodeError.getText(), 'Error: Enter a full postcode in England')
    await assert.equal(await postcodePO.postcodeError.getText(), postcodeData.errormessage)
  })

  it('Enter only numbers postcode Error', async () => {
    await expect(postcodePO.postcodeTextbox.setValue(postcodeData.numbers))
    await postcodePO.postCodePageContinueCommandButton.click()
    await expect(postcodePO.postcodeError).exist
    await assert.equal(await postcodePO.postcodeError.getText(), postcodeData.errormessage)
  })
})
