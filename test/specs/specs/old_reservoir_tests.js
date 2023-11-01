// /* global browser it describe expect $ */
// // This test case is only for postcodes with reservoir risks

// const postcodePO = require('../page_objects/postcode_page')
// const addressPO = require('../page_objects/address_page')
// const riskdisplayPO = require('../page_objects/risk_display_page')
// const riskInfotext = require('../page_objects/risk_info_text_page')
// const assert = require('chai').assert

// describe('Check Your Long Term FLood Risk, risk display', async () => {
//   it('Enter the postcode', async () => {
//     await browser.url('')
//     await browser.setWindowSize(1800, 800)
//     const handles = await browser.getWindowHandles()
//     await browser.pause(3000)
//     await expect(postcodePO.postcodeTextbox.setValue('WA41AB'))
//     await browser.pause(3000)
//     await expect(postcodePO.postCodePageContinueCommandButton.click())
//     await browser.switchToWindow(handles[0])
//   })

//   it('Check the title and URL of address page', async () => {
//     const handles = await browser.getWindowHandles()
//     await browser.switchToWindow(handles[0])
//     await expect(addressPO.addressCombo).exist
//     const addresscomboText = await addressPO.addressCombo
//     await addresscomboText.selectByAttribute('value', 4)
//     // await browser.pause(3000)
//     await expect(addressPO.addressContinueButton).exist
//     await expect(addressPO.addressContinueButton.click())
//     // await browser.pause(3000)
//   })

//   it('Get the handle of risk display page', async () => {
//     const handles = await browser.getWindowHandles()
//     await browser.switchToWindow(handles[0])
//     // await browser.pause(3000)
//   })

//   // Check heading
//   it('Check the heading of risk display page', async () => {
//     await expect(riskdisplayPO.heading).exist
//     // TODO: Check this test
//     // const headingText = await riskdisplayPO.heading
//     // console.log('heading', await headingText.getText())
//   })

//   // Check subheading
//   it('Check the subheading of risk display page', async () => {
//     await expect(riskdisplayPO.subHeading).exist
//     // TODO: Check this test
//     // const subheadingText = await riskdisplayPO.subHeading
//     // console.log('subheading', await subheadingText.getText())
//     await browser.pause(3000)
//   })

//   // Check Risk Types and Risk Levels
//   it('Check Risk Types', async () => {
//     // Read the no. of risk types
//     await expect(riskdisplayPO.risktypes).exist
//     const riskcountlength = await riskdisplayPO.risktypes.length
//     // TODO: Check this test
//     // console.log('riskcountlength', riskcountlength)
//     // take the count of risk types
//     const risktypes = await riskdisplayPO.risktypes
//     // console.log('risktypes', risktypes)

//     // Read the no. of risk level

//     await expect(riskdisplayPO.riskLevel).exist
//     // const risklevel = await riskdisplayPO.riskLevel
//     await riskdisplayPO.riskLevel
//     for (let countrisk = 0; countrisk < riskcountlength; countrisk++) {
//       // console.log('I am in the loop')
//       if (await risktypes[countrisk].getText() === 'Reservoirs') {
//         // console.log('I could find Rservoir Risk')

//         const reservoir = await $('.reservoirs')
//         const htmlStructure = await reservoir.getHTML()
//         // console.log('HTML structure:', htmlStructure)
//         const allText = await browser.execute((structure) => {
//           const tempElement = document.createElement('div')
//           tempElement.innerHTML = structure
//           let text = tempElement.innerText.trim()
//           text = text.replace(/\s+/g, ' ') // Replace multiple spaces with a single space
//           text = text.replace(/\n+/g, '\n') // Remove consecutive new lines
//           return text
//         }, htmlStructure)
//         // console.log('All text:', allText)
//         const reservoirText = riskInfotext.reservoirrisk.toString().replace(/\r\n/g, '\n')
//         // console.log('Risk Info text', reservoirText)

//         /// Chai assertion doesnot work shows error \r\n
//         await assert.equal(reservoirText, allText, 'Comparing did not go well')
//       }
//     }
//   })
// })
