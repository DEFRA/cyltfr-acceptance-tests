const fs = require('fs')
const Page = require('./page')

class RiskInfoText extends Page {
  // Surface Water Risk Info
  get SWInfoHigh () {
    const data = fs.readFileSync('./test/specs/content_data/SW_HighRisk.txt', 'utf8')
    return data
  }

  get SWInfoMedium () {
    const data = fs.readFileSync('./test/specs/content_data/SW_MediumRisk.txt', 'utf8')
    return data
  }

  get SWInfoLow () {
    const data = fs.readFileSync('./test/specs/content_data/SW_LowRisk.txt', 'utf8')
    return data
  }

  get SWInfoVLow () {
    const data = fs.readFileSync('./test/specs/content_data/SW_VeryLowRisk.txt', 'utf8')
    return data
  }

  // Rivers and Sea Info
  get RSInfoHigh () {
    const data = fs.readFileSync('./test/specs/content_data/RS_HighRisk.txt', 'utf8')
    return data
  }

  get RSInfoMedium () {
    const data = fs.readFileSync('./test/specs/content_data/RS_MediumRisk.txt', 'utf8')
    return data
  }

  get RSInfoLow () {
    const data = fs.readFileSync('./test/specs/content_data/RS_LowRisk.txt', 'utf8')
    return data
  }

  get RSInfoVLow () {
    const data = fs.readFileSync('./test/specs/content_data/RS_VeryLowRisk.txt', 'utf8')
    return data
  }

  get Reservoirunlikely () {
    const data = fs.readFileSync('./test/specs/content_data/reservoirunlikely.txt', 'utf8')
    return data
  }

  get Reservoirlikely () {
    const data = fs.readFileSync('./test/specs/content_data/reservoirlikely.txt', 'utf8')
    return data
  }

  get reservoir () {
    const data = fs.readFileSync('./test/specs/content_data/reservoir.txt', 'utf8')
    return data
  }

  get reservoirrisk () {
    const data = fs.readFileSync('./test/specs/content_data/reservoirrisk.txt', 'utf8')
    return data
  }

  get Groundwater () {
    const data = fs.readFileSync('./test/specs/content_data/groundwater.txt', 'utf8')
    return data
  }

  get accordionSurfaceWater () {
    const data = fs.readFileSync('./test/specs/content_data/surfacewateraccordion.txt', 'utf8')
    return data
  }

  get accordionRiversSea () {
    const data = fs.readFileSync('./test/specs/content_data/riverseaaccordion.txt', 'utf8')
    return data
  }

  get accordionReservoir () {
    const data = fs.readFileSync('./test/specs/content_data/reservoiraccordion.txt', 'utf8')
    return data
  }

  get accordionGroundwater () {
    const data = fs.readFileSync('./test/specs/content_data/groundwateraccordion.txt', 'utf8')
    return data
  }
}
module.exports = new RiskInfoText()
