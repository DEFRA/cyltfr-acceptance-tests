const Page = require('./page')
const fs = require('fs')
class ContentCheck extends Page {
  get SurfaceWater () {
    const data = fs.readFileSync('./test/specs/content_data/SW_VLowRisk.txt', 'utf8')
    return data
  }

  get RiversandSea () {
    const data = fs.readFileSync('./test/specs/content_data/RiversandSea_VeryLowRisk.txt', 'utf8')
    return data
  }

  get Reservoir () {
    const data = fs.readFileSync('./test/specs/content_data/reservoir.txt', 'utf-8')
    return data
  }

  get RSContent () {
    const data = fs.readFileSync('./test/specs/content_data/RiversandSea.txt', 'utf8')
    return data
  }
}
module.exports = new ContentCheck()
