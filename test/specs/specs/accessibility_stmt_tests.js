/* global browser, describe, it, expect */
const accessibilityStmt = require('../page_objects/accessibility_stmt_page')
const fs = require('fs')
const assert = require('chai').assert

describe('Check Privacy notice Content', async () => {
  it('Check page URL and Title', async () => {
    await browser.url('/accessibility-statement')
    // console.log(await browser.getTitle()) // Home page
    await browser.pause(5000)
    await expect(accessibilityStmt.pageContent).exist
    const accessibilityStmtWebpageContent = await accessibilityStmt.checkAccessibilityContent
    const accessibilityStmtFile = await fs.readFileSync('./test/specs/content_data/accessibilty-stmt-data.txt', 'utf8')
    await assert.equal(accessibilityStmtWebpageContent, accessibilityStmtFile.toString().replace(/\r\n/g, '\n'), 'Comparison didnt go well')
  })
})
