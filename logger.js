const chalk = require('chalk')

class CustomLogger {
    log(message) { console.info(chalk.blue(message)) }
    success(message) { console.log(chalk.green(message)) }
    error(message) { console.error(chalk.red(message)) }
}

module.exports = new CustomLogger()