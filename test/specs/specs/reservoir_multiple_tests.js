/* global browser it describe expect $ */
// This test case is only for postcodes with reservoir risks

const postcodePO = require('../page_objects/postcode_page')
const addressPO = require('../page_objects/address_page')
const riskdisplayPO = require('../page_objects/risk_display_page')
// const riskInfotext = require('../page_objects/riskInfotext')
const reservoirpostcode = require('../test-data/reservoir_postcodes_data.js')
const assert = require('chai').assert

describe('Check Your Long Term FLood Risk, risk display', async () => {
  it('Check the reservoir risk data from reservoirpostcode.js', async () => {
    // Check the no.of items from reservoirpostcode.js
    for (let i = 0; i < reservoirpostcode.length; i++) {
      const { postcode, address, reservoirtext } = reservoirpostcode[i]
      // Open the browser
      await browser.url('')
      await browser.setWindowSize(1800, 800)
      const handles = await browser.getWindowHandles()
      await browser.pause(3000)
      // Read the postcode value from the reservoir.js

      await expect(postcodePO.postcodeTextbox.setValue(postcode))
      await browser.pause(3000)
      // Click on Continue button
      await expect(postcodePO.postCodePageContinueCommandButton.click())
      await browser.switchToWindow(handles[0])
      const addresscombo = await $("//select[@id='address']")
      // Read the address value from the reservoirpostcodes.js
      await addresscombo.selectByIndex(address)
      // TODO: Check this test
      // const addressvalue = await addresscombo.getValue()
      // console.log('Address Value', addressvalue)
      // await browser.pause(3000)
      await expect(addressPO.addressContinueButton.click())
      // Check heading
      await expect(riskdisplayPO.heading).exist
      // TODO: Check this test
      // const headingText = await riskdisplayPO.heading
      // console.log('heading', await headingText.getText())
      // Check subheading
      await expect(riskdisplayPO.subHeading).exist
      // TODO: Check this test
      // const subheadingText = await riskdisplayPO.subHeading
      // console.log('subheading', await subheadingText.getText())
      await browser.pause(3000)
      // Read the no. of risk types
      await expect(riskdisplayPO.risktypes).exist
      const riskcountlength = await riskdisplayPO.risktypes.length
      // console.log('riskcountlength', riskcountlength)
      // take the count of risk types
      const risktypes = await riskdisplayPO.risktypes
      // console.log('risktypes', risktypes)

      // Read the no. of risk level on page (SW/ RS/ GW/ Res)

      await expect(riskdisplayPO.riskLevel).exist
      // const risklevel = await riskdisplayPO.riskLevel
      await riskdisplayPO.riskLevel
      for (let countrisk = 0; countrisk < riskcountlength; countrisk++) {
        // Check for the Reservoir type
        if (await risktypes[countrisk].getText() === 'Reservoirs') {
          // console.log('I could find Reservoir Risk')
          // get the content from the web for reservoir (including the list of reservoir affecting the area list)
          const reservoir = await $('.reservoirs')
          const htmlStructure = await reservoir.getHTML()
          // console.log('HTML structure:', htmlStructure)
          const allText = await browser.execute((structure) => {
            const tempElement = document.createElement('div')
            tempElement.innerHTML = structure
            let text = tempElement.innerText.trim()
            text = text.replace(/\s+/g, ' ') // Replace multiple spaces with a single space
            text = text.replace(/\n+/g, '\n') // Remove consecutive new lines
            return text
          }, htmlStructure)
          // console.log('All text:', allText)
          const reservoirText = reservoirtext
          // console.log('Risk Info text', reservoirText)

          // Chai assertion doesnot work shows error \r\n
          await assert.equal(reservoirText, allText, 'Comparing did not go well')
        }
      }
    }
  })
})
