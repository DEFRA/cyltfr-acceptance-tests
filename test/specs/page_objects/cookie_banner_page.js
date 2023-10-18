/* global $ */
const Page = require('./page')

class CookiebannerPO extends Page {
  get bannerHeading () {
    return $('.govuk-cookie-banner__heading.govuk-heading-m')
  }

  get cookieText1 () {
    return $("div[class='govuk-cookie-banner__message govuk-width-container js-question-banner'] p:nth-child(1)")
  }

  get cookieText2 () {
    return $("div[class='govuk-cookie-banner__message govuk-width-container js-question-banner'] p:nth-child(2)")
  }

  get cookieAcceptbutton () {
    return $("button[value='true']")
  }

  get cookieRejectbutton () {
    return $("button[value='false']")
  }

  get hideMessagebutton () {
    return $("div[class='govuk-cookie-banner__message govuk-width-container js-cookies-accepted'] a[role='button']")
  }

  get viewCookiehyperlink () {
    return $("div[class='govuk-button-group'] a[class='govuk-link']")
  }
}
module.exports = new CookiebannerPO()
