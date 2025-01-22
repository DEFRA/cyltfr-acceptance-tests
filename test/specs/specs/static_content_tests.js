'use strict'
/*
It would probably be sensible to place all tests for static content into this one file and rename file to static_content_tests
*/

const file = require('../utilities/file')
const privacyNoticePage = require('../page_objects/privacy_notice_page')
const accessibilityStmtPage = require('../page_objects/accessibility_stmt_page')
const cookieStmtPage = require('../page_objects/cookie_stmt_page')
const floodRiskPage = require('../page_objects/flood_risk_page')
const informationForPlanningPage = require('../page_objects/information_for_planning_page')
const feedBackPage = require('../page_objects/feedback_page')
// const postcodePage = require('../page_objects/postcode_page')
// const addressPage = require('../page_objects/address_page')
// const propertyRiskPage = require('../page_objects/risk_display_page')
// const commonFunctions = require('../page_objects/common_functions')
const fs = require('fs')

describe('Check Privacy Notice Content', async () => {
  it('Check page URL and Title', async () => {
    // open target page
    console.log('*** PRIVACY NOTICE CONTENT CHECK')
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
    console.log('*** ACCESSIBILITY STATEMENT CONTENT CHECK')
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
describe('Check Cookies statement Content', async () => {
  it('Should have the correct content for the cookies statement', async () => {
    console.log('*** COOKIE STATEMENT CONTENT CHECK')
    // grab the Cookie statement txt file, name it and have available for test
    const cookieStmtFile = fs.readFileSync('./test/specs/content_data/cookiestatement_latest.txt', 'utf8')
    // open browser, check the tab title is correct and we are definately on the correct url
    await browser.url('/cookies')
    expect(await browser.getTitle()).equals('Cookies - Check your long term flood risk - GOV.UK')
    expect(await browser.getUrl()).equals(`${baseUrl}/cookies`)
    // using page object, get the content fromt the page we are checking, and check against what we have in the txt file replacing some characters picked up with carrige returns.
    expect(await cookieStmtPage.checkcookieContent()).equals(cookieStmtFile.toString().replace(/\r\n/g, '\n'))
  })
})

// add test for Get flood risk data content
describe('Check Get flood risk data Content', async () => {
  it('Should have the correct content for the get flood risk page', async () => {
    console.log('*** FLOOD RISK DATA CONTENT CHECK')
    // grab the Cookie statement txt file, name it and have available for test
    const floodRiskFile = fs.readFileSync('./test/specs/content_data/flood_riskdata.txt', 'utf8')
    // open browser, check the tab title is correct and we are definately on the correct url
    await browser.url('/risk-data')
    expect(await browser.getTitle()).equals('Get flood risk data - Check your long term flood risk - GOV.UK')
    expect(await browser.getUrl()).equals(`${baseUrl}/risk-data`)
    // using page object, get the content fromt the page we are checking, and check against what we have in the txt file replacing some characters picked up with carrige returns.
    expect(await floodRiskPage.checkFloodRiskContent()).equals(floodRiskFile.toString().replace(/\r\n/g, '\n'))
  })
})
// add test for Information to support planning Application content
describe('Check Information to support planning Application Content', async () => {
  it('Should have the correct content for the Information to support planning Application page', async () => {
    console.log('*** INFORMATION FOR PLANNING APPLICATION CONTENT CHECK')
    // grab the Information to support planning application txt file, name it and have available for test
    const informationFile = fs.readFileSync('./test/specs/content_data/information-for-planning-application-data.txt', 'utf8')
    // open browser, check the tab title is correct and we are definately on the correct url
    await browser.url('/information-for-planning')
    expect(await browser.getTitle()).equals('Information for planning - Check your long term flood risk - GOV.UK')
    expect(await browser.getUrl()).equals(`${baseUrl}/information-for-planning`)
    // using page object, get the content fromt the page we are checking, and check against what we have in the txt file replacing some characters picked up with carrige returns.
    expect(await informationForPlanningPage.checkInformationForPlanningPageContent()).equals(informationFile.toString().replace(/\r\n/g, '\n'))
  })
})
// add test for feedback page content
describe('Click feedback page back link and navigate back to the application', async () => {
  it('Should click on back link and navigate to postcode page', async () => {
    console.log('*** NAVIGATE TO FEEDBACK PAGE')
    await browser.url('/feedback')
    expect(await browser.getTitle()).equals('Give feedback on the Check Your Long Term Flood Risk service - Check your long term flood risk - GOV.UK')
    expect(await browser.getUrl()).equals(`${baseUrl}/feedback`)
    console.log('*** CLICK BACK LINK ON FEEDBACK PAGE')
    expect(await feedBackPage.clickBackLink())
    expect(await browser.getTitle()).equals('Where do you want to check? - Check your long term flood risk - GOV.UK')
    expect(await browser.getUrl()).equals(`${baseUrl}/postcode`)
  })
})
