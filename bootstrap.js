const fs = require('fs')
const { join } = require('path')

module.exports = (files = []) => {

    const FOLDER = 'files';
    if (!fs.existsSync(FOLDER)) {
        fs.mkdirSync(FOLDER)

        files.forEach(file => {
            const path = join(FOLDER, `${file}.json`)
            fs.writeFileSync(path, JSON.stringify([]))
        })
    }

}