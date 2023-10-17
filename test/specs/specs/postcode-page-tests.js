/* global browser it describe */

const { expect, assert } = require('chai')

const postcodePO = require('../page_objects/postcode_PO')
const postcodepage = require('../test_data/postcodepage')
const cookiebanner_PO = require('../page_objects/cookiebanner_PO')


describe('Checking web elements for postcode page', async () => {
  it('Open page URL and maximize window', async () => {
    await browser.url('')
    await browser.setWindowSize(1800, 1200)
    await browser.getWindowHandles()
  })

  //To include Cookies banner and Accept the cookie message
  it('Accept the cookies and hide the message', async() => {
  await expect(cookiebanner_PO.cookieAcceptbutton).exist
  await cookiebanner_PO.cookieAcceptbutton.click()
  await expect(cookiebanner_PO.hideMessagebutton).exist
  await cookiebanner_PO.hideMessagebutton.click()
  })

  //LTFRI-771 - Changes to read data from test_data folder

  it('Check the title', async () => {
    await expect(postcodePO.title).exist
    await console.log('Title', await postcodePO.title.getText())
    await assert.equal(await postcodePO.title.getText(), postcodedata.title, '')
  })

  it('Check the subheading', async () => {
    await expect(postcodePO.subHeading).exist
    await assert.equal(await postcodePO.subHeading.getText(), postcodedata.subheading, '')
  })

  it('Check the postcodeHeading', async () => {
    await expect(postcodePO.postcodeHeading).exist
    await assert.equal(await postcodePO.postcodeHeading.getText(), postcodedata.postcodeHeading)
  })

  it('Check the postcode textbox', async () => {
    await expect(postcodePO.postcodeTextbox).exist
  })

  it('Check the postcode hint', async () => {
    await expect(postcodePO.postcodeHint).exist
    await assert.equal(await postcodePO.postcodeHint.getText(), postcodedata.postcodehint)
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
    //await expect(postcodePO.postcodeTextbox.setValue(''))
    await expect(postcodePO.postcodeTextbox.setValue(postcodepage.empty))
    await postcodePO.postCodePageContinueCommandButton.click()
    await expect(postcodePO.postcodeError).exist
    await assert.equal(await postcodePO.postcodeError.getText(), postcodedata.errormessage)

  })

  it('Enter an invalid format less than 4 postcode Error', async () => {
    await expect(postcodePO.postcodeTextbox.setValue(postcodedata.less))
    await postcodePO.postCodePageContinueCommandButton.click()
    expect(await postcodePO.getPostcodeErrorMessage()).to.equals(postcodepage.errormessage)
  })

  /* Need fix as currently displaying an error */
  it('Enter an invalid format more than 6 postcode Error', async () => {
    await expect(postcodePO.postcodeTextbox.setValue(postcodedata.more))
    await postcodePO.postCodePageContinueCommandButton.click()
    await expect(postcodePO.postcodeError).exist
    await assert.equal(await postcodePO.postcodeError.getText(), postcodepage.errormessage)
    await expect(postcodePO.postcodeTextbox.setValue(''))
  })

  it('Enter an invalid postcode Error', async () => {
    await expect(postcodePO.postcodeTextbox.setValue(postcodedata.alpha))
    await postcodePO.postCodePageContinueCommandButton.click()
    await expect(postcodePO.postcodeError).exist
    await assert.equal(await postcodePO.postcodeError.getText(), postcodedata.errormessage)
  })

  it('Enter special characters postcode Error', async () => {
    await expect(postcodePO.postcodeTextbox.setValue(postcodedata.specialcharacters))
    await postcodePO.postCodePageContinueCommandButton.click()
    await expect(postcodePO.postcodeError).exist
    //await assert.equal(await postcodePO.postcodeError.getText(), 'Error: Enter a full postcode in England')
    await assert.equal(await postcodePO.postcodeError.getText(), postcodedata.errormessage)
  })

  it('Enter only numbers postcode Error', async () => {
    await expect(postcodePO.postcodeTextbox.setValue(postcodedata.numbers))
    await postcodePO.postCodePageContinueCommandButton.click()
    await expect(postcodePO.postcodeError).exist
    await assert.equal(await postcodePO.postcodeError.getText(), postcodedata.errormessage)
  })
})
