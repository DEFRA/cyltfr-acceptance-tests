/* global browser it describe */

const { expect, assert } = require('chai')

const postcodePO = require('../page_objects/postcode_PO')

describe('Checking web elements for postcode page', async () => {
  it('Open page URL and maximize window', async () => {
    await browser.url('')
    await browser.setWindowSize(1800, 1200)
    await browser.getWindowHandles()
  })

  it('Check the title', async () => {
    await expect(postcodePO.title).exist
    // await console.log('Title', await postcodePO.title.getText())
    await assert.equal(await postcodePO.title.getText(), 'Where do you want to check?', '')
  })

  it('Check the subheading', async () => {
    await expect(postcodePO.subHeading).exist
    // await console.log('Subheading', await postcodePO.subHeading.getText())
    await assert.equal(await postcodePO.subHeading.getText(), 'This service will tell you the flood risk of an area, not a specific property.', '')
  })

  it('Check the postcodeHeading', async () => {
    await expect(postcodePO.postcodeHeading).exist
    // await console.log('post code Heading', await postcodePO.postcodeHeading.getText())
    await assert.equal(await postcodePO.postcodeHeading.getText(), 'Enter a postcode')
  })

  it('Check the postcode textbox', async () => {
    await expect(postcodePO.postcodeTextbox).exist
  })

  it('Check the postcode hint', async () => {
    await expect(postcodePO.postcodeHint).exist
    // await console.log('postcode hint', await postcodePO.postcodeHint.getText())
    await assert.equal(await postcodePO.postcodeHint.getText(), 'for example, WA4 1AB')
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
    await expect(postcodePO.postcodeTextbox.setValue(''))
    await postcodePO.postCodePageContinueCommandButton.click()
    await expect(postcodePO.postcodeError).exist
    await assert.equal(await postcodePO.postcodeError.getText(), 'Error: Enter a full postcode in England')
  })

  it('Enter an invalid format less than 4 postcode Error', async () => {
    await (postcodePO.postcodeTextbox.setValue('WA4'))
    await postcodePO.postCodePageContinueCommandButton.click()
    expect(await postcodePO.getPostcodeErrorMessage()).to.equals('Error:\nEnter a full postcode in England')
    // await expect(postcodePO.postcodeError).exist
    // await assert.equal(await postcodePO.postcodeError.getText(), 'Error: Enter a full postcode in England')
  })

  /* Need fix as currently displaying an error */
  it('Enter an invalid format more than 6 postcode Error', async () => {
    await expect(postcodePO.postcodeTextbox.setValue('WA4 1ABZ'))
    await postcodePO.postCodePageContinueCommandButton.click()
    await expect(postcodePO.postcodeError).exist
    await assert.equal(await postcodePO.postcodeError.getText(), 'Error: Enter a full postcode in England')
    await expect(postcodePO.postcodeTextbox.setValue(''))
  })

  it('Enter an invalid postcode Error', async () => {
    await expect(postcodePO.postcodeTextbox.setValue('ZZZ ZZZ'))
    await postcodePO.postCodePageContinueCommandButton.click()
    await expect(postcodePO.postcodeError).exist
    await assert.equal(await postcodePO.postcodeError.getText(), 'Error: Enter a full postcode in England')
  })

  it('Enter special characters postcode Error', async () => {
    await expect(postcodePO.postcodeTextbox.setValue('£$% @~#*'))
    await postcodePO.postCodePageContinueCommandButton.click()
    await expect(postcodePO.postcodeError).exist
    await assert.equal(await postcodePO.postcodeError.getText(), 'Error: Enter a full postcode in England')
  })

  it('Enter only numbers postcode Error', async () => {
    await expect(postcodePO.postcodeTextbox.setValue('0123456789'))
    await postcodePO.postCodePageContinueCommandButton.click()
    await expect(postcodePO.postcodeError).exist
    await assert.equal(await postcodePO.postcodeError.getText(), 'Error: Enter a full postcode in England')
  })
})
