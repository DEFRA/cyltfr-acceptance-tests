'use strict'

/*
It would probably be sensible to place all tests for static content into this one file and rename file to static_content_tests
*/

const privacyNoticePage = require('../page_objects/privacy_notice_page')
const file = require('../utilities/file')
const accessibilityStmtPage = require('../page_objects/accessibility_stmt_page')
const fs = require('fs')

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

describe('Check Accessibility statement Content', async () => {
  it('Should have the correct content for the accessibility statement', async () => {
    // grab the accessibility statement txt file, name it and have available for test
    const accessibilityStmtFile = fs.readFileSync('./test/specs/content_data/accessibilty-stmt-data.txt', 'utf8')
    // open browser, check the tab title is correct and we are definately on the correct url
    await browser.url('/accessibility-statement')
    expect(await browser.getTitle()).equals('Accessibility statement for Check your long term flood risk - Check your long term flood risk - GOV.UK')
    expect(await browser.getUrl()).equals(`${baseUrl}/accessibility-statement`)
    // using page object, get the content fromt he page we are checking, and check against what we have in the txt file replacing some characters picked up with carrige returns.
    expect(await accessibilityStmtPage.checkAccessibilityContent()).equals(accessibilityStmtFile.toString().replace(/\r\n/g, '\n'))
  })
})

// add test for cookies statement content
