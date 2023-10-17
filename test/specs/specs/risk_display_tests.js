/* global browser it describe expect $ $$ */
const postcodePO = require('../page_objects/postcode_page')
const addressPO = require('../page_objects/address_page')
const riskdisplayPO = require('../page_objects/risk_display_page')
const riskInfotext = require('../page_objects/risk_info_text_page')
const assert = require('chai').assert

describe('Check Your Long Term FLood Risk, risk display', async () => {
  it('Open the page and Enter the postcode', async () => {
    // await postcode_PO.openPage
    await browser.url('')
    await browser.setWindowSize(1800, 800)
    const handles = await browser.getWindowHandles()
    await browser.pause(3000)
    await expect(postcodePO.postcodeTextbox.setValue('LE2 7QA'))
    await browser.pause(3000)
    await expect(postcodePO.postCodePageContinueCommandButton.click())
    await browser.switchToWindow(handles[0])
  })

  it('Check the title and URL of address page', async () => {
    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[0])
    await expect(addressPO.addressCombo).exist
    const addresscomboText = await addressPO.addressCombo
    await addresscomboText.selectByAttribute('value', 3)
    await expect(addressPO.addressContinueButton).exist
    await expect(addressPO.addressContinueButton.click())
  })

  it('Get the handle of risk display page', async () => {
    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[0])
  })

  // Check heading
  it('Check the heading of risk display page', async () => {
    await expect(riskdisplayPO.heading).exist
    // TODO: Check this test
    //  const headingText = await riskdisplayPO.heading
    // console.log('heading', await headingText.getText())
  })

  // Check subheading
  it('Check the subheading of risk display page', async () => {
    await expect(riskdisplayPO.subHeading).exist
    // TODO: Check this test
    // const subheadingText = await riskdisplayPO.subHeading
    // console.log('subheading', await subheadingText.getText())
    await browser.pause(3000)
  })

  // Check Risk Types and Risk Levels
  it('Check Risk Types', async () => {
    // Read the no. of risk types
    await expect(riskdisplayPO.risktypes).exist
    const riskcountlength = await riskdisplayPO.risktypes.length
    // console.log('riskcountlength', riskcountlength)
    // take the count of risk types
    const risktypes = await riskdisplayPO.risktypes

    // Read the no. of risk level

    await expect(riskdisplayPO.riskLevel).exist
    const risklevel = await riskdisplayPO.riskLevel
    // Checking the number of risks displayed on the page (RS, SW, GW, Res)
    for (let countrisk = 0; countrisk < riskcountlength; countrisk++) {
      // Checks for RS
      if (await risktypes[countrisk].getText() === 'Rivers and the sea') {
        // Checking the risk level of RS
        if (await risklevel[countrisk].getText() === 'Very low risk') {
          const riversseavlow = await $('.rivers-sea')
          const htmlStructure = await riversseavlow.getHTML()
          // console.log('HTML structure:', htmlStructure)
          const allText = await browser.execute((structure) => {
            const tempElement = document.createElement('div')
            tempElement.innerHTML = structure
            let text = tempElement.innerText.trim()
            text = text.replace(/\s+/g, ' ') // Replace multiple spaces with a single space
            text = text.replace(/\n+/g, '\n') // Remove consecutive new lines
            return text
          }, htmlStructure)
          // console.log('All text:', allText)
          const RSInfoVLow = riskInfotext.RSInfoVLow.toString().replace(/\r\n/g, '\n')
          await assert.equal(RSInfoVLow, allText, 'Comparing did not go well')
        // Working on this
        } else if (await risklevel[countrisk].getText() === 'Low risk') {
          const riverssealow = await $('.rivers-sea')
          const htmlStructure = await riverssealow.getHTML()
          // console.log('HTML structure:', htmlStructure)
          const allText = await browser.execute((structure) => {
            const tempElement = document.createElement('div')
            tempElement.innerHTML = structure
            let text = tempElement.innerText.trim()
            text = text.replace(/\s+/g, ' ') // Replace multiple spaces with a single space
            text = text.replace(/\n+/g, '\n') // Remove consecutive new lines
            return text
          }, htmlStructure)
          // console.log('All text:', allText)
          const RSInfoLow = riskInfotext.RSInfoLow.toString().replace(/\r\n/g, '\n')
          /// Chai assertion doesnot work shows error \r\n
          await assert.equal(RSInfoLow, allText, 'Comparing did not go well')
          /// Node js assertion doesnot work shows error \r\n
          // await assert.equal(riskInfotext.RSInfoLow, await riskdisplay_PO.riversandseaRiskContent.getText() )
        } else if (await risklevel[countrisk].getText() === 'Medium risk') {
          const riversseamedium = await $('.rivers-sea')
          const htmlStructure = await riversseamedium.getHTML()
          // console.log('HTML structure:', htmlStructure)
          const allText = await browser.execute((structure) => {
            const tempElement = document.createElement('div')
            tempElement.innerHTML = structure
            let text = tempElement.innerText.trim()
            text = text.replace(/\s+/g, ' ') // Replace multiple spaces with a single space
            text = text.replace(/\n+/g, '\n') // Remove consecutive new lines
            return text
          }, htmlStructure)
          // console.log('All text:', allText)
          const RSInfoMedium = riskInfotext.RSInfoMedium.toString().replace(/\r\n/g, '\n')
          /// Chai assertion doesnot work shows error \r\n
          await assert.equal(RSInfoMedium, allText, 'Comparing did not go well')
        } else if (await risklevel[countrisk].getText() === 'High risk') {
          const riversseahigh = await $('.rivers-sea')
          const htmlStructure = await riversseahigh.getHTML()
          // console.log('HTML structure:', htmlStructure)
          const allText = await browser.execute((structure) => {
            const tempElement = document.createElement('div')
            tempElement.innerHTML = structure
            let text = tempElement.innerText.trim()
            text = text.replace(/\s+/g, ' ') // Replace multiple spaces with a single space
            text = text.replace(/\n+/g, '\n') // Remove consecutive new lines
            return text
          }, htmlStructure)
          // console.log('All text:', allText)
          const RSInfoHigh = riskInfotext.RSInfoHigh.toString().replace(/\r\n/g, '\n')
          /// Chai assertion doesnot work shows error \r\n
          await assert.equal(RSInfoHigh, allText, 'Comparing did not go well')
        } else {
          // console.log('I couldnt find match any Rivers and Sea risk levels')
        }
      } else if (await risktypes[countrisk].getText() === 'Surface water') {
        // console.log('I could find Surface Water Risk')

        if (await risklevel[countrisk].getText() === 'Very low risk') {
          // console.log('I could find Surface Water Risk Very low risk')
          const surfacewatervlow = await $('.surface-water')
          const htmlStructure = await surfacewatervlow.getHTML()
          // console.log('HTML structure:', htmlStructure)
          const allText = await browser.execute((structure) => {
            const tempElement = document.createElement('div')
            tempElement.innerHTML = structure
            let text = tempElement.innerText.trim()
            text = text.replace(/\s+/g, ' ')// Replace multiple spaces with a single space
            text = text.replace(/\n+/g, '\n')// Remove consecutive new lines
            return text
          }, htmlStructure)
          // console.log('All text:', allText)
          // Reading the value from the file
          // const SWInfoVLow = riskInfotext.SWInfoVLow.toString().replace(/\r\n/g, "\n")
          // Replacing the current Coucil in the text before comparing
          const searchText = 'council'
          const replacementlocator = await $("div[class='surface-water'] p[class='govuk-body'] strong")
          const replacement = await replacementlocator.getText()
          // console.log('Replacement from the locator', replacement)
          const SWInfoVLow = riskInfotext.SWInfoVLow.toString().replace(/\r\n/g, '\n')
          const replacedText = SWInfoVLow.replace(searchText, replacement)
          // console.log('rEPLACED tEXT', replacedText)
          /// Chai assertion doesnot work shows error \r\n
          await assert.equal(replacedText, allText, 'Comparing did not go well')
        } else if (await risklevel[countrisk].getText() === 'Low risk') {
          // console.log('I could find Surface Water Risk low risk')
          // TODO: Check this test
          // const surfacewaterlow = await $('.surface-water')
          // const htmlStructure = await surfacewaterlow.getHTML()
          // console.log('HTML structure:', htmlStructure)
          // const allText = await browser.execute((structure) => {
          //   const tempElement = document.createElement('div')
          //   tempElement.innerHTML = structure
          //   let text = tempElement.innerText.trim()
          //   text = text.replace(/\s+/g, ' ')// Replace multiple spaces with a single space
          //   text = text.replace(/\n+/g, '\n')// Remove consecutive new lines
          //   return text
          // }, htmlStructure)
          // console.log('All text:', allText)
          // Replacing the current Coucil in the text before comparing
          const searchText = 'council'
          const replacementlocator = await $("div[class='surface-water'] p[class='govuk-body'] strong")
          const replacement = await replacementlocator.getText()
          // console.log('Replacement from the locator', replacement)
          const SWInfoVLow = riskInfotext.SWInfoVLow.toString().replace(/\r\n/g, '\n')
          const replacedText = SWInfoVLow.replace(searchText, replacement)
          // console.log('Replaced Text', replacedText)

          /// Chai assertion doesnot work shows error \r\n
          await assert.equal(SWInfoVLow, replacedText, 'Comparing did not go well')
        } else if (await risklevel[countrisk].getText() === 'Medium risk') {
          // console.log('I could find Surface Water Risk Medium risk')
          // TODO: Check this test
          // const surfacewatermedium = await $('.surface-water')
          // const htmlStructure = await surfacewatermedium.getHTML()
          // console.log('HTML structure:', htmlStructure)
          // const allText = await browser.execute((structure) => {
          //   const tempElement = document.createElement('div')
          //   tempElement.innerHTML = structure
          //   let text = tempElement.innerText.trim()
          //   text = text.replace(/\s+/g, ' ')// Replace multiple spaces with a single space
          //   text = text.replace(/\n+/g, '\n')// Remove consecutive new lines
          //   return text
          // }, htmlStructure)
          // console.log('All text:', allText)
          // Replacing the file text with the council details
          // console.log('Surface Water Info Medium Risk', SWInfoMedium)
          // console.log('Surface Water Medium Risk', allText)
          // Replacing the current Coucil in the text before comparing
          const searchText = 'council'
          const replacementlocator = await $("div[class='surface-water'] p[class='govuk-body'] strong")
          const replacement = await replacementlocator.getText()
          // console.log('Replacement from the locator', replacement)
          const SWInfoMedium = riskInfotext.SWInfoMedium.toString().replace(/\r\n/g, '\n')
          const replacedText = SWInfoMedium.replace(new RegExp(searchText, 'g'), searchText, replacement)
          // console.log('Replaced Text', replacedText)

          /// Chai assertion doesnot work shows error \r\n
          await assert.equal(SWInfoMedium, replacedText, 'Comparing did not go well')
        } else if (await risklevel[countrisk].getText() === 'High risk') {
          // console.log('I could find Surface Water Risk High low risk')
          // TODO: Check this test
          // const surfacewaterhigh = await $('.surface-water')
          // const htmlStructure = await surfacewaterhigh.getHTML()
          // console.log('HTML structure:', htmlStructure)
          // const allText = await browser.execute((structure) => {
          //   const tempElement = document.createElement('div')
          //   tempElement.innerHTML = structure
          //   let text = tempElement.innerText.trim()
          //   text = text.replace(/\s+/g, ' ')// Replace multiple spaces with a single space
          //   text = text.replace(/\n+/g, '\n')// Remove consecutive new lines
          //   return text
          // }, htmlStructure)
          // console.log('All text:', allText)

          // Replacing the current Coucil in the text before comparing
          const searchText = 'council'
          const replacementlocator = await $("div[class='surface-water'] p[class='govuk-body'] strong")
          const replacement = await replacementlocator.getText()
          // console.log('Replacement from the locator', replacement)
          const SWInfoHigh = riskInfotext.SWInfoHigh.toString().replace(/\r\n/g, '\n')
          const replacedText = SWInfoHigh.replace(new RegExp(searchText, 'g'), searchText, replacement)
          // console.log('Replaced Text', replacedText)

          /// Chai assertion doesnot work shows error \r\n
          await assert.equal(SWInfoHigh, replacedText, 'Comparing did not go well')
        } else {
          // console.log('I couldnt find match any Surface Water risk levels')
        }
      } else if (await risktypes[countrisk].getText() === 'Groundwater') {
        // groundwater needs individual title and sub title checks as there is no class defined for it
        //
        const groundwatertitle = await $('body > div:nth-child(7) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(11) > h3:nth-child(1)')
        assert.equal(await groundwatertitle.getText(), 'Groundwater')
        // const groundwatersubtitle = await $("iv[class='govuk-inset-text very-low'] p[class='govuk-body'] strong")
        const gwtitle = await $('body > div:nth-child(7) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(11) > p:nth-child(2)')
        const gwtitlecheck = await gwtitle.getText()
        assert.equal(gwtitlecheck, 'Flooding from groundwater is unlikely in this area')

        // checking  groundwater description
        const groundwaterinfo = await $('body > div:nth-child(7) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > details:nth-child(12) > div:nth-child(2)')
        const htmlStructure = await groundwaterinfo.getHTML()
        // console.log('HTML structure:', htmlStructure)
        const allText = await browser.execute((structure) => {
          const tempElement = document.createElement('div')
          tempElement.innerHTML = structure
          let text = tempElement.innerText.trim()
          text = text.replace(/\s+/g, ' ')// Replace multiple spaces with a single space
          text = text.replace(/\n+/g, '\n')// Remove consecutive new lines
          return text
        }, htmlStructure)
        // console.log('All text:', allText)
        const groundwater = riskInfotext.Groundwater.toString().replace(/\r\n/g, '\n')
        /// Chai assertion doesnot work shows error \r\n
        await assert.equal(groundwater, allText, 'Comparing did not go well')
      } else if (await risktypes[countrisk].getText() === 'Reservoirs') {
        // Checking Reservoir title
        const reservoirInfo = await $("//h3[normalize-space()='Reservoirs']")
        assert.equal(await reservoirInfo.getText(), 'Reservoirs')
        // Checking Reservoir subheading (Likely/ Unlikely)
        // const reservoirsubtitle = ''
        // const ressubtitle = ''
        // Finding Locator for reservoir with Reservoir risk
        const resType = await $('.reservoirs .govuk-inset-text')
        if (await resType.isExisting()) {
          const reservoirsubtitle = await $('.reservoirs .govuk-inset-text p')
          const ressubtitle = await reservoirsubtitle.getText()
          assert.equal(ressubtitle, 'There is a risk of flooding from reservoirs in this area')
          // console.log('Got the risk Reservoir heading')
        } else {
          // Locator for unlikely Reservoir risk
          const reservoirsubtitle = await $$('div.govuk-inset-text.very-low strong')
          // Getting the last element text
          // const lastelement = ''
          for (const element of reservoirsubtitle) {
            const text = await element.getText()
            if (text === 'Flooding from reservoirs is unlikely in this area') {
              assert.equal(text, 'Flooding from reservoirs is unlikely in this area')
              //  const ressubtitle = await reservoirsubtitle.getText()
              break
            } else {
              // console.log('Element locator for unlikely reservoir could not be found')
            }
          }
        }

        // Checking Reservoir Accordion
        const reservoirAccordion = await $$('details.govuk-details .govuk-details__summary-text')

        for (let i = 0; i < reservoirAccordion.length; i++) {
          const element = reservoirAccordion[i]
          const restext = await element.getText()
          // console.log('text', restext)
          if (restext === 'What a reservoir is and how we check an area’s risk') {
            assert.equal(restext, 'What a reservoir is and how we check an area’s risk')
            await reservoirAccordion[i].click()
            // console.log('Reservoir Accordion title', restext)
            break
          } else {
            // console.log('Reservoir accordion title cold not be found')
          }
        }

        await browser.pause(5000)
        // Get the Reservoir text
        const reservoiraacordiontext = await $$('div.reservoirs details.govuk-details div.govuk-details__text')

        for (const element of reservoiraacordiontext) { // eslint-disable-line no-unused-vars
          const reservoiraacordiontextsummary = await $('div.reservoirs details.govuk-details div.govuk-details__text')
          const htmlStructure = await reservoiraacordiontextsummary.getHTML()
          // console.log('HTML structure:', htmlStructure)
          const allText = await browser.execute((structure) => {
            const tempElement = document.createElement('div')
            tempElement.innerHTML = structure
            return tempElement.innerText.trim()
          }, htmlStructure)

          const allTextsummary = allText.replace(/\n+/g, '')
          const allTextsummary1 = allTextsummary.replace(/\s+/g, ' ')
          // console.log('Reservoir summary Text All text:', allTextsummary1)

          const reservoirSummarytext = riskInfotext.reservoir.toString().replace(/\r\n/g, '\n')
          // console.log('Reservoir summary File Info text:', reservoirSummarytext)

          await assert.equal(reservoirSummarytext, allTextsummary1, 'Comparison didnt go well')
          // The details of reservoir risk is handled in a separate test case
        }
      } else {
        // console.log('Could not find any risk types')
      }
    }
  })
})
