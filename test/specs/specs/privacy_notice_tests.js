/* global browser, describe, it, expect */
const privacyNotice = require('../page_objects/privacy_notice_page')
const fs = require('fs')
const assert = require('chai').assert

describe('Check Privacy notice Content', async () => {
  it('Check page URL and Title', async () => {
    await browser.url('/privacy-notice')
    // console.log(await browser.getTitle()) // Home page
    await browser.pause(5000)
    await expect(privacyNotice.pageContent).exist
    const privacynoticeWebpageContent = await privacyNotice.checkPrivacynoticeContent
    const privacyNoticeFile = await fs.readFileSync('./test/specs/content_data/privacyNotice.txt', 'utf8')
    await assert.equal(privacynoticeWebpageContent, privacyNoticeFile.toString().replace(/\r\n/g, '\n'), 'Comparison didnt go well')
  })
})
