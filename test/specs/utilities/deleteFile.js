'use strict'

const fs = require('fs')

class FileUtils {
  deleteDirectory (dirPath) {
    if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true })
    }
  }
}

module.exports = new FileUtils()
