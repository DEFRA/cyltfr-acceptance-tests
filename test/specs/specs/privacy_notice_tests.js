'use strict'

const privacyNoticePage = require('../page_objects/privacy_notice_page')
const file = require('../utilities/file')
// const fs = require('fs')

describe('Check Privacy notice Content', async () => {
  it('Check page URL and Title', async () => {
    // open target page
    await browser.url('/privacy-notice')
    // check on the right page
    expect(await browser.getTitle()).equals('Privacy notice - Check your long term flood risk - GOV.UK')
    expect(await browser.getUrl()).equals(`${baseUrl}/privacy-notice`)
    // set variable to be the text file object, then clean formatting and set as 'privacyNoticeWebPageContent' variable
    const privacyNoticeFile = file.textFileRead('./test/specs/content_data/privacyNotice.txt', 'utf8')
    const privacyNoticeWebPageContent = (privacyNoticeFile.toString().replace(/\r\n/g, '\n'))
    // get everything off the privacy notice page, and check it matches what we have in the content file we have formatted.
    expect(await privacyNoticePage.checkPrivacyNoticeContent()).equals(privacyNoticeWebPageContent)
  })
})
