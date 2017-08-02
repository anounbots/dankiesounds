const chalk = require('chalk');
const moment = require('moment');
const time = moment().format(`YYYY-MM-DD HH:mm:ss`);

exports.log = (message) => {
    console.log(chalk.green(`[${time}]`), chalk.yellow(`${message}`))
};

exports.error = (message) => {
    console.log(chalk.green(`[${time}]`), chalk.red(`${message}`))
};