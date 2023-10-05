const fs = require('fs')
class TextReplace {
  textFileReplace (filename, encoding, strToReplace, newString) {
    const data = fs.readFileSync(filename, encoding)

    const result = data.replace(strToReplace, newString)

    fs.writeFileSync(filename, result, encoding)
  }

  textNewFileReplace (filename, encoding, newFilename, newString1, newString2, newString3, newString4) {
    const data = fs.readFileSync(filename, encoding)

    let result

    if (newString1 !== '') {
      result = data.replace('$tomorrow', newString1)
    }

    if (newString2 !== '') {
      result = data.replace('$dayName1', newString2)
    }

    if (newString3 !== '') {
      result = data.replace('$dayName2', newString3)
    }

    if (newString4 !== '') {
      result = data.replace('$dayName3', newString4)
    }

    fs.writeFileSync(newFilename, result, encoding)
  }

  textFileReadPattern (filename, encoding, patternToGet) {
    const data = fs.readFileSync(filename, encoding)

    const result = data.match(patternToGet)

    return result
  }

  textFileRead (filename, encoding) {
    const data = fs.readFileSync(filename, encoding)

    return data
  }

  async textFileReadRows (filename, encoding) {
    const data = fs.readFileSync(filename, encoding)

    const dataArray = data.toString().split(/\r?\n/)

    return dataArray
  }

  async checkIfFileExists (filename) {
    try {
      fs.accessSync(filename, fs.constants.F_OK)

      return true
    } catch (err) {
      console.log(err)
    }
  }

  removeDirectory (dirPath) {
    try {
      fs.rmdirSync(dirPath, { recursive: true })

      return true
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = new TextReplace()
