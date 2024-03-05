/*
I've not reviewed this test, but there is a similar test in the flood-service-tests-v2 repo which could be replicated for CYLTFR i think
*/

// /* global describe, it, browser */
// const { expect, assert } = require('chai')

// const cookiebannerPO = require('../page_objects/cookie_banner_page')

// describe('Checking web elements for postcode page', async () => {
//   it('Open page URL and maximize window', async () => {
//     await browser.url('')
//     await browser.setWindowSize(1800, 1200)
//     await browser.getWindowHandles()
//   })

//   it('Check the cookie banner heading', async () => {
//     await expect(cookiebannerPO.bannerHeading).exist
//     // await console.log('Cookie banner Title', await cookiebannerPO.bannerHeading.getText())
//     await assert.equal(await cookiebannerPO.bannerHeading.getText(), 'Cookies on Check your long term flood risk', '')
//   })

//   it('Check the cookie banner text line 1', async () => {
//     await expect(cookiebannerPO.cookieText1).exist
//     // await console.log('Cookie banner Text1', await cookiebannerPO.cookieText1.getText())
//     await assert.equal(await cookiebannerPO.cookieText1.getText(), 'We use some essential cookies to make this service work.', '')
//   })

//   it('Check the cookie banner text line 2', async () => {
//     await expect(cookiebannerPO.cookieText2).exist
//     // await console.log('Cookie banner Text2', await cookiebannerPO.cookieText2.getText())
//     await assert.equal(await cookiebannerPO.cookieText2.getText(), "We'd also like to use analytics cookies so we can understand how you use the service and make improvements.", '')
//   })

//   it('Check the Accept button', async () => {
//     await expect(cookiebannerPO.cookieAcceptbutton).exist
//     // await console.log('Accept button', await cookiebannerPO.cookieAcceptbutton.getText())
//     await assert.equal(await cookiebannerPO.cookieAcceptbutton.getText(), 'Accept analytics cookies')
//   })

//   it('Check the Reject button', async () => {
//     await expect(cookiebannerPO.cookieRejectbutton).exist
//     // await console.log('Reject button', await cookiebannerPO.cookieRejectbutton.getText())
//     await assert.equal(await cookiebannerPO.cookieRejectbutton.getText(), 'Reject analytics cookies')
//   })

//   it('Check for View button hyperlink', async () => {
//     await expect(cookiebannerPO.viewCookiehyperlink).exist
//     // await console.log('View button hyperlink', await cookiebannerPO.viewCookiehyperlink.getText())
//     await assert.equal(await cookiebannerPO.viewCookiehyperlink.getText(), 'View cookies')
//   })
// })
