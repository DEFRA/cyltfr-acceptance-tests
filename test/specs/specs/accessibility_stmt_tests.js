'use strict'

const accessibilityStmtPage = require('../page_objects/accessibility_stmt_page')
const fs = require('fs')

describe('Check Privacy notice Content', async () => {
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
