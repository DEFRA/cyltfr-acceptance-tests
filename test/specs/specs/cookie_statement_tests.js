// /* global describe, it, browser, expect */
// const cookieStatement = require('../page_objects/cookie_statement_page')
// const fs = require('fs')
// const assert = require('chai').assert

// describe('Check Privacy notice Content', async () => {
//   it('Check page URL and Title', async () => {
//     await browser.url('/cookies')
//     // console.log(await browser.getTitle()) // Home page
//     await browser.pause(3000)
//     await expect(cookieStatement.pageContent).exist
//     const cookiestatementWebpageContent = await cookieStatement.checkcookieContent
//     const cookiestatementFile = await fs.readFileSync('./test/specs/content_data/cookiestatement_latest.txt', 'utf8')
//     await assert.equal(cookiestatementWebpageContent, cookiestatementFile.toString().replace(/\r\n/g, '\n'), 'Comparison didnt go well')
//   })
// })
